def append(list1, list2):
    return [*list1, *list2]


def concat(lists):
    new_list = []
    for list in lists:
        new_list = append(new_list, list)

    return new_list


def filter(function, list):
    new_list = []
    for item in list:
        if function(item):
            new_list = append(new_list, [item])

    return new_list

def length(list):
    len = 0
    for item in list:
        len += 1

    return len


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
    new_list = []
    for item in list:
        new_list = append([item], new_list)

    return new_list
