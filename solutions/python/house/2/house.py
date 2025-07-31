from typing import List

VERSES = [
    " the house that Jack built.",
    " the malt that lay in",
    " the rat that ate",
    " the cat that killed",
    " the dog that worried",
    " the cow with the crumpled horn that tossed",
    " the maiden all forlorn that milked",
    " the man all tattered and torn that kissed",
    " the priest all shaven and shorn that married",
    " the rooster that crowed in the morn that woke",
    " the farmer sowing his corn that kept",
    " the horse and the hound and the horn that belonged to"
]

def recite(start_verse: int, end_verse: int) -> List[str]:
    """Returns a list with all the verses asked for
    
    :param start_verse: In which verb the list will begin.
    :param end_verse: The verse in which the list will stop.
    :return: List - The list with all the verses that have been crafted.
    """
    
    return [craft_verse(verse) for verse in range(start_verse, end_verse + 1)]
    
def craft_verse(verse: int) -> str:
    """Creates a verse based on an int of the stanza
    
    :param verse: The stanza to be built.
    :return: str - The crafted verse using the LIST phrases to be added.
    """
    
    return "This is" + "".join(VERSES[x] for x in reversed(range(verse)))
