
def is_isogram(string):
    return len(list(c for c in string.lower() if c.isalpha())) == len(set(c for c in string.lower() if c.isalpha()))
