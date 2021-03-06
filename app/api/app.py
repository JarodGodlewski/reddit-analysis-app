import time
import json
from flask import Flask, request
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

@app.route('/get_word_correlation')
def get_word_correlation_graph():
    data = reddit.get_word_correlation_data()
    return {'words': data[0], 'freq': data[1]}

@app.route('/result', methods = ['POST'])
def result():
    data = request.data.decode('UTF-8')
    data_as_json = json.loads(data)
    subreddit_name = data_as_json["subreddit"]
    print(subreddit_name)
    exists_val = reddit.check_subreddits(subreddit_name)

    if exists_val == 'true':
        reddit.set_subreddit(subreddit_name)
        get_avg_upvote_time_graph()
        get_comments_time_graph()
        get_word_correlation_graph()
    return exists_val
    