VOWELS = ["a", "e", "i", "o", "u"]
SPECIALS = ["xr", "yt"]

def translate(text: str) -> str:
    """Takes a string, divides it into words and calles the piggy_it function on each word and then joins the result
    
    :param text: The word or sentence to be piggyfied.
    :return: str - The piggy version of the word or sentence.
    """
    
    return " ".join(piggy_it(word) for word in text.split())

def piggy_it(word: str) -> str:
    """Takes a word and checks how to piggify it based on vowel positioning
    
    :param word: The word to be piggyfied.
    :return: str - The piggyfied word.
    """
    
    if word[0] in VOWELS or word[0:2] in SPECIALS:
        return word + "ay"

    for pos in range(1, len(word)):
        if word[pos] in [*VOWELS, "y"]:
            pos += 1 if word[pos] == "u" and word[pos - 1] == "q" else 0
            return word[pos:] + word[:pos] + "ay"
    