def transform(legacy_data):
    new_data = {}
    for key, data in legacy_data.items():
        if isinstance(data, list):
            for point in data:
                new_data[point.lower()] = key
        else:
            new_data[data.lower()] = key
        
    return new_data