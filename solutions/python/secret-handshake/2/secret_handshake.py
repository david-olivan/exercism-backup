from typing import List

ACTIONS = ["wink", "double blink", "close your eyes", "jump"]

def commands(binary_str: str) -> List[str]:
    """Takes in a binary decimal number and converts it into a list of handshake actions
    
    :param binary_str: A string representing the binary value of a decimal number.
    :return: List - The list with the handshake actions equivalent to that number.
    """
    
    is_reversed, *options = binary_str
    list_actions = [ACTIONS[x] for x, digit in enumerate(options[::-1]) if int(digit)]
    
    return list_actions if not int(is_reversed) else list_actions[::-1]