def flatten(iterable):
    return [] if isListEmpty(iterable) else unpackList(iterable)


def unpackList(ls):
    new_list = []
    for value in ls:
        if isinstance(value, list):
            for v in unpackList(value):
                new_list.append(v)
        elif value is not None:
            new_list.append(value)

    return new_list
            

def isListEmpty(ls):
    return all(map(isListEmpty, ls)) if isinstance(ls, list) else False