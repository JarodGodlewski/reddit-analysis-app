import math

import praw
import pytz
from post import post
from subreddit import subreddit
from datetime import datetime

# reads file named auth to get id and secret for api
f = open("auth", "r")
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
#subreddit_names = ["cscareerquestions", "talesfromretail", "csmajors", "fantheories", "bestoflegaladvice", "legaladvice", "Idontworkherelady", "unresolvedmysteries", "MaliciousCompliance", "lifeofnorman"]
subreddit_names = ["all"]
subreddit_data = []

# attain subreddit data to use
# may need to change comment count from len, check api
def get_subreddit_data():

    for subname in subreddit_names:
        top_posters = {}
        top_posts = []
        print("Collecting data for " + subname)
        curr_subreddit = None
        for submission in reddit.subreddit(subname).hot(limit=3):
            print("Processing post ", submission.title, " for sub ", subname)
            upvotes = submission.score
            upvote_ratio = submission.upvote_ratio
            downvotes = math.floor((100 * upvotes) / (upvote_ratio*100)) - upvotes
            top_posts.append(post(submission.id, submission.created_utc, submission.title, submission.selftext, submission.num_comments, upvotes, downvotes, upvote_ratio))
            if submission.author in top_posters:
                curr = top_posters.get(submission.author)
                curr += 1
                top_posters[submission.author] = curr
            else:
                top_posters[submission.author] = 1

        highly_upvoted_users = [key for key, value in top_posters.items() if value > 1]

        curr_subreddit = subreddit(subname, top_posts, highly_upvoted_users)
    
        subreddit_data.append(curr_subreddit)
        curr_subreddit.printPosts()

# get comment data with time stamps
def get_comment_data():

    for subname in subreddit_names:
        for submission in reddit.subreddit(subname).hot(limit=3):
            print(submission.title)
            submission.comments.replace_more(limit=0)
            for comment in submission.comments:
                time_diff = submission.created-comment.created
                
                print('\n')
                
#get_subreddit_data()
get_comment_data()
