BANDS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

def value(colors):
    return BANDS.index(colors[0]) * 10 + BANDS.index(colors[1])
