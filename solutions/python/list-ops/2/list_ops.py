def append(list1, list2):
    return [*list1, *list2]


def concat(lists):
    return [item for list in lists for item in list]


def filter(function, list):
    return [item for item in list if function(item)]


def length(list):
    return sum([1 for item in list])


def map(function, list):
    return [function(item) for item in list]


def foldl(function, list, initial):
    for item in list:
        initial = function(initial, item)

    return initial


def foldr(function, list, initial):
    for item in reverse(list):
        initial = function(initial, item)

    return initial


def reverse(list):
    return [list[i] for i in range(length(list) - 1, -1, -1)]
