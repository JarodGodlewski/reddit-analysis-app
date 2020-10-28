class subreddit:
    name: str
    top_posts: list
    common_posters: list

    def __init__(self, name, top_posts, common_posters):
        self.name = name
        self.top_posts = top_posts
        self.common_posters = common_posters

    def update_posts(self, top_posts):
        self.top_posts = top_posts

    def printPosts(self):
        for post in self.top_posts:
            print(post)