def translate(text):
    words = text.split(" ")

    for word in words:
        if word[0] in ["a", "e", "i", "o", "u"] or word[0:2] in ["xr", "yr", "yt"]:
            words[words.index(word)] = word + "ay"
        elif word[0:3] in ["thr", "sch"]:
            words[words.index(word)] = word[3:] + word[0:3] + "ay"
        elif word[0:2] in ["ch", "qu", "th", "rh"]:
            words[words.index(word)] = word[2:] + word[0:2] + "ay"
        else:
            if word[1:3] == "qu":
                words[words.index(word)] = word[3:] + word[0:3] + "ay"
            else:
                words[words.index(word)] = word[1:] + word[0] + "ay"

    return " ".join(words)
    