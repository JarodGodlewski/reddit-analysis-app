import math
import praw
import pytz
import os
from .post import post
from .subreddit import subreddit
from .comment import comment
from datetime import datetime
from collections import OrderedDict


class RedditData:
    # reads file named auth to get id and secret for api - for some reason had to change to actual path
    dir = "C:/Users/boait/Documents/GitHub/reddit-analysis-app"
    f = open(dir + "/auth.txt", "r")
    id = f.readline().strip()
    secret = f.readline().strip()

    user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0"

    reddit = praw.Reddit(
        client_id=id,
        client_secret=secret,
        user_agent=user_agent
    )

    est = pytz.timezone('US/Eastern')

    # list of subreddits to process
    # subreddit_names = ["cscareerquestions", "talesfromretail", "csmajors", "fantheories", "bestoflegaladvice", "legaladvice", "Idontworkherelady", "unresolvedmysteries", "MaliciousCompliance", "lifeofnorman"]
    # subreddit_names = ["all"]
    subreddit_names = ["cscareerquestions", "talesfromretail", "csmajors"]
    subreddit_data = []
    time_avg = OrderedDict()

    def __init__(self):
        for i in range(0, 24):
            self.time_avg[i] = [0, 0, 0]
        self.get_subreddit_data()

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
        # curr_subreddit.printPosts()

    def post_success_time_graph(self):
        print("starting process")
        x_values = list(range(0, 24))
        y_values = [round(value[2],2) for key, value in self.time_avg.items()]

        return [x_values, y_values]

    # get comment data with time stamps
    def get_comment_data(self):

        for subname in self.subreddit_names:
            for submission in self.reddit.subreddit(subname).hot(limit=3):
                print(submission.title)
                submission.comments.replace_more(limit=0)
                for comment in submission.comments:
                    time_diff = submission.created - comment.created

                    print('\n')

# getdata = RedditData()
# getdata.main()
# get_comment_data()
# points
# time posted
# time posted in buckets....
