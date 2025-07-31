def is_isogram(string: str) -> bool:
    """It evaluates whether a given word is an isogram
    
    :param string: The word to be evaluated.
    :return: bool - Whether the word is an isogram or not.
    """
    
    clean = string.replace("-", "").replace(" ", "").lower()
    return len(clean) == len(set(clean))
