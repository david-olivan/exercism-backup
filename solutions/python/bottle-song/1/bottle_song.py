LYRICS = [
    "XXX green bottles hanging on the wall,",
    "And if one green bottle should accidentally fall,",
    "There'll be YYY green bottles hanging on the wall."
]

NUMBERS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

def recite(start, take=1):
    new_lyrics = []
    for step in range(take):
        if step is not 0: new_lyrics.append("")
        if start == 1:
            new_lyrics.append(LYRICS[0].replace("XXX", NUMBERS[start].capitalize()).replace("bottles", "bottle"))
            new_lyrics.append(LYRICS[0].replace("XXX", NUMBERS[start].capitalize()).replace("bottles", "bottle"))
        else:
            new_lyrics.append(LYRICS[0].replace("XXX", NUMBERS[start].capitalize()))
            new_lyrics.append(LYRICS[0].replace("XXX", NUMBERS[start].capitalize()))
        new_lyrics.append(LYRICS[1])
        if start == 2:
            new_lyrics.append(LYRICS[2].replace("YYY", NUMBERS[start - 1]).replace("bottles", "bottle"))
        else:
            new_lyrics.append(LYRICS[2].replace("YYY", NUMBERS[start - 1]))
            
        start -= 1

    return new_lyrics