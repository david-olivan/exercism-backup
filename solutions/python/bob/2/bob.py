ANSWERS = {"question": "Sure.",
           "shout": "Whoa, chill out!",
           "silence": "Fine. Be that way!",
           "shouted_question": "Calm down, I know what I'm doing!",
           "resto": "Whatever."}

def response(hey_bob):

    response = ""
    hey_bob = hey_bob.strip()
    question, shout = hey_bob.endswith("?"), hey_bob.isupper()
    if len(hey_bob) == 0: response = "silence"
    if question and shout: response = "shouted_question"
    if question and not shout: response = "question"
    if not question and shout: response = "shout"
    if len(response) == 0: response = "resto"

    return ANSWERS[response]
