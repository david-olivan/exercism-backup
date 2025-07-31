from string import ascii_lowercase

LOW_ALPH = ascii_lowercase

def rotate(text: str, key: int) -> str:
    """Takes in a string and an int representing the ROT key and returns the ciphered sentence
    
    :param text: The string to be ciphered.
    :param key: The ROT value to set the Caesar cipher.
    :return: str - The ciphered string.
    """

    translator = LOW_ALPH[key:] + LOW_ALPH[:key]
    return text.translate(str.maketrans(LOW_ALPH + LOW_ALPH.upper(), translator + translator.upper()))
