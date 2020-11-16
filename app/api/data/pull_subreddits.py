import math
import praw
import pytz
import string
from .post import post
from .subreddit import subreddit
from .comment import comment
from datetime import datetime
from collections import OrderedDict


class RedditData:
    # reads file named auth to get id and secret for api - for some reason had to change to actual path
    est = pytz.timezone('US/Eastern')
    reddit = None

    # list of subreddits to process
    # subreddit_names = ["cscareerquestions", "talesfromretail", "csmajors", "fantheories", "bestoflegaladvice", "legaladvice", "Idontworkherelady", "unresolvedmysteries", "MaliciousCompliance", "lifeofnorman"]
    subreddit_names = ["rabbits"]
    #subreddit_names = ["cscareerquestions", "talesfromretail", "csmajors"]
    subreddit_data = []
    time_avg = OrderedDict()

    comment_times = {}
    # reads file named auth to get id and secret for api - for some reason had to change to actual path
    # setup time_avg
    def __init__(self):
        #dir = "C:/Users/boait/Documents/GitHub/reddit-analysis-app"
        #f = open(dir + "/auth.txt", "r")
        f = open("data/auth", "r")
        id = f.readline().strip()
        secret = f.readline().strip()

        user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0"

        self.reddit = praw.Reddit(
            client_id=id,
            client_secret=secret,
            user_agent=user_agent
        )

        for i in range(0, 24):
            self.time_avg[i] = [0, 0, 0]

        #self.get_subreddit_data()

    # attain subreddit data to use
    # may need to change comment count from len, check api
    def get_subreddit_data(self):

        for subname in self.subreddit_names:
            top_posters = {}
            top_posts = []
            print("Collecting data for " + subname)
            curr_subreddit = None
            for submission in self.reddit.subreddit(subname).hot(limit=200):
                # print("Processing post ", submission.title, " for sub ", subname)
                upvotes = submission.score
                upvote_ratio = submission.upvote_ratio
                downvotes = math.floor((100 * upvotes) / (upvote_ratio * 100)) - upvotes
                created = datetime.fromtimestamp(submission.created_utc)

                #updating data for time_avg for use in get_post_success_time_graph()
                vals = self.time_avg.get(created.hour)
                vals[0] = vals[0] + 1
                vals[1] = vals[1] + upvotes
                vals[2] = vals[1] / vals[0]
                self.time_avg[created.hour] = vals

                top_posts.append(
                    post(submission.id, created, submission.title, submission.selftext, submission.num_comments,
                         upvotes, downvotes, upvote_ratio))
                if submission.author in top_posters:
                    curr = top_posters.get(submission.author)
                    curr += 1
                    top_posters[submission.author] = curr
                else:
                    top_posters[submission.author] = 1

            highly_upvoted_users = [key for key, value in top_posters.items() if value > 1]

            curr_subreddit = subreddit(subname, top_posts, highly_upvoted_users)

            self.subreddit_data.append(curr_subreddit)

    # get average post success per hour
    def post_success_time_graph(self):
        print("starting process")
        x_values = list(range(0, 24))
        y_values = [round(value[2],2) for key, value in self.time_avg.items()]

        return [x_values, y_values]

    # get comment data with time stamps for a specific subreddit
    def get_comment_data(self):

        #change to use search functionality
        for submission in self.reddit.subreddit("all").hot(limit=1):
            print(submission.title)
            submission.comments.replace_more(limit=10)
            ctr = 0
            for comment in submission.comments:
                time_diff =  (comment.created - submission.created) // 60
                if (time_diff in self.comment_times):
                    self.comment_times[time_diff] += 1
                else:
                    self.comment_times[time_diff] = 1
                ctr += 1
            print(ctr)
                #print("Minutes: " + str(time_diff // 60) + " Seconds: " + str(time_diff % 60))
                #print('\n')

    def post_comment_times_graph(self):
        x_values = sorted(self.comment_times.keys())
        y_values = [self.comment_times[i] for i in x_values]
        y_values_accum = [y_values[0]]
        for i in range(1,len(y_values)-1):
            y_values_accum.append(y_values_accum[i-1]+y_values[i])
        print(len(x_values))
        print(len(y_values))
        for i in range(0, len(x_values)-1):
            print(x_values[i], y_values_accum[i])
        
        return [x_values, y_values_accum]

    def get_word_correlation_data(self):
        word_freq = {}
        articles = ['and', 'the', 'for', 'a', 'if', 'it', 'its', 'from', 'this', 'at', 'as', 'to', 'of', 'in', 'be', 'is']
        for submission in self.reddit.subreddit("politics").top(limit=100):
            title = submission.title.translate(str.maketrans('','',string.punctuation))
            title_words = title.strip().split()
            for word in title_words:
                if (word not in articles):
                    if (word.lower() in word_freq):
                        word_freq[word.lower()] += 1
                    else:
                        word_freq[word.lower()] = 1
        word_freq = {k: v for k, v in sorted(word_freq.items(), key=lambda item: item[1], reverse=True)}
        print(word_freq.keys(), list(word_freq.values())
        #return word_freq
        return 
