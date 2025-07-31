def commands(binary_str):

    actions = list(filter(None, [int(binary_str[4]) * "wink",
                                 int(binary_str[3]) * "double blink",
                                 int(binary_str[2]) * "close your eyes",
                                 int(binary_str[1]) * "jump"
                             ]))
    return actions if not int(binary_str[0]) else actions[::-1]
