def transform(legacy_data: dict[int, list[str]]) -> dict[str, int]:
    """It takes in legacy data in dictionary form with points as keys and letters as lists and transforms it into a more manegeable dictionary with letters as keys and points as values
    
    :param legacy_data: The old style of data structure and storaging of points per letters.
    :return: dict - The new type of structure with each letter and entry with associated points."""
    return {
        point.lower(): key 
        for key, data in legacy_data.items() 
        for point in data
    }