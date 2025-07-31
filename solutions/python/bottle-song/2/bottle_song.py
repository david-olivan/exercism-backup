NUMBERS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

def recite(start, take=1):
    new_lyrics = []
    for step in range(take):
        if step is not 0: new_lyrics.append("")
        new_lyrics.append(f'{NUMBERS[start].capitalize()} green {"bottles" if start != 1 else "bottle"} hanging on the wall,')
        new_lyrics.append(f'{NUMBERS[start].capitalize()} green {"bottles" if start != 1 else "bottle"} hanging on the wall,')
        new_lyrics.append("And if one green bottle should accidentally fall,")
        new_lyrics.append(f'There\'ll be {NUMBERS[start - 1]} green {"bottles" if start != 2 else "bottle"} hanging on the wall.')
           
        start -= 1

    return new_lyrics