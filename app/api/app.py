import time
from flask import Flask
from .data import pull_subreddits

app = Flask(__name__)
reddit = pull_subreddits.RedditData()

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/get_avg_upvote_time')
def get_avg_upvote_time_graph():
    data = reddit.post_success_time_graph()
    return {'x_values': data[0],
            'y_values': data[1]}

@app.route('/get_comment_times')
def get_comments_time_graph():
    reddit.get_comment_data()
    data = reddit.post_comment_times_graph()
    return {'x_values': data[0], 'y_values': data[1]}
