def abbreviate(words):
    """It takes in a sentence and creates an acronym with the first letter of each word

    :param words: The sentence that will be turned into an acronym.
    :return: str - The acronym using the first word of that sentence.
    """
    
    lista = list(filter(None, words.replace("-", " ").replace("_", " ").split(" ")))
    return "".join([word[0].upper() for word in lista])
