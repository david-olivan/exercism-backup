from string import ascii_lowercase
LOW_ALPH = ascii_lowercase
ATBASH = LOW_ALPH[::-1]

def encode(plain_text):
    encoded = plain_text.lower().replace(" ", "").replace(".", "").replace(",", "").translate(str.maketrans(ATBASH, LOW_ALPH))
    encoded_list = []
    while (True):
        if len(encoded) >= 5:
            encoded_list.append(encoded[0:5])
            encoded = encoded[5::]
        else:
            encoded_list.append(encoded)
            break
        
    return " ".join(encoded_list).rstrip()


def decode(ciphered_text):
    return ciphered_text.replace(" ", "").translate(str.maketrans(LOW_ALPH, ATBASH))