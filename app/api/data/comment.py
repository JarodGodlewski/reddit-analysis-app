class comment:
    id: str
    created: int
    text: str
    upvotes: int
    downvotes: int
    
    def __init__(self, id, created, text, upvotes, downvotes):
        self.id = id
        self.created = created
        self.text = text
        self.upvotes = upvotes
        self.downvotes = downvotes

    def __str__(self):
        return text
