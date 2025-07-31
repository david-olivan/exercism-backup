def is_pangram(sentence):
    """Checks whether a sentence contains at least one instance of each letter in the alphabet
    
    :param sentence: The sentence that will be evaluated.
    :return: bool - Whether the sentence is a pangram or not
    """
    
    return len(set(c for c in sentence.lower() if c.isalpha())) == 26
