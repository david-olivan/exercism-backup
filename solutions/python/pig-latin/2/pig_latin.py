VOWELS = ["a", "e", "i", "o", "u"]
SPECIALS = ["xr", "yt"]

def translate(text):
    return " ".join(piggy_it(word) for word in text.split())

def piggy_it(word):
        
    
    if word[0] in VOWELS or word[0:2] in SPECIALS:
        return word + "ay"

    for pos in range(1, len(word)):
        if word[pos] in [*VOWELS, "y"]:
            pos += 1 if word[pos] == "u" and word[pos - 1] == "q" else 0
            return word[pos:] + word[:pos] + "ay"
    