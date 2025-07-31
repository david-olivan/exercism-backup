from string import ascii_lowercase, ascii_uppercase

LOWERCASE = list(ascii_lowercase)
UPPERCASE = list(ascii_uppercase)

def rotate(text, key):

    funsie = ""

    for chr in text:
        if chr.isalpha():
            # Do the transformation
            if chr.islower():
                newIndex = LOWERCASE.index(chr) + key
                funsie += LOWERCASE[newIndex if newIndex < len(LOWERCASE) else newIndex - 26]
            if chr.isupper():
                newIndex = UPPERCASE.index(chr) + key
                funsie += UPPERCASE[newIndex if newIndex < len(UPPERCASE) else newIndex - 26]
        else:
            funsie += chr
    
    return funsie
        
