from datetime import datetime

class post:
    id: str
    created: float
    text: str
    title: str
    comment_count: int
    upvotes: int
    downvotes: int
    upvote_ratio: int

    def __init__(self, id, created, title, text, comment_count, upvotes, downvotes, upvote_ratio):
        self.id = id
        self.created = created
        self.title = title
        self.text = text
        self.comment_count = comment_count
        self.upvotes = upvotes
        self.downvotes = downvotes
        self.upvote_ratio = upvote_ratio

    def __str__(self):
        return "Post ID: " + self.id + "\nTitle: " + self.title + "\nCreated Date/Time: " +\
               str(self.created) + "Score (upvotes): " + str(self.upvotes) + "\n" + self.text
