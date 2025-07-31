from string import ascii_lowercase
CIPHER = str.maketrans(ascii_lowercase, ascii_lowercase[::-1])

def encode(plain_text: str) -> str:
    ciphered_text = "".join(letter.lower() for letter in plain_text if letter.isalnum()).translate(CIPHER)
    return " ".join(ciphered_text[index:index+5] for index in range(0, len(ciphered_text), 5))


def decode(ciphered_text: str) -> str:
    return "".join(letter for letter in ciphered_text if letter.isalnum()).translate(CIPHER)