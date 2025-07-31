def transform(legacy_data):
    new_data = {}
    for key, data in legacy_data.items():
        for point in data:
            new_data[point.lower()] = key
        
    return new_data