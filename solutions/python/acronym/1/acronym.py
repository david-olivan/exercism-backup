def abbreviate(words):
    lista = list(filter(None, words.replace("-", " ").replace("_", " ").split(" ")))
    acronym = ""
    for word in lista:
        acronym += word[0].upper()

    return acronym
