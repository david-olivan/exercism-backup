from string import ascii_lowercase
CIPHER = str.maketrans(ascii_lowercase, ascii_lowercase[::-1])

def encode(plain_text: str, encoding: bool = True) -> str:
    return _chunk(_translate(plain_text)) if encoding else _translate(plain_text)


def decode(ciphered_text: str) -> str:
    return encode(ciphered_text, False)


def _translate(text: str) -> str:
    return "".join(letter.lower() for letter in text if letter.isalnum()).translate(CIPHER)


def _chunk(text: str) -> str:
    return " ".join(text[index:index+5] for index in range(0, len(text), 5))