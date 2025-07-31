ANSWERS = {"question": "Sure.",
           "shout": "Whoa, chill out!",
           "silence": "Fine. Be that way!",
           "shoutquestion": "Calm down, I know what I'm doing!",
           "": "Whatever."}

def response(hey_bob):
    """Takes in a prompt and gives back the typical answer of Bob, the lackadaisical teenager.
    
    :param hey_bob: The message that Bob will reply to.
    :return: str - Bob's response.
    """
    
    hey_bob = hey_bob.strip()
    if not hey_bob: return ANSWERS["silence"]    
    question = "question" if hey_bob.endswith("?") else ""
    shout = "shout" if hey_bob.isupper() else ""

    return ANSWERS[shout + question]
