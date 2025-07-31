def transform(legacy_data):
    return {
        point.lower(): key 
        for key, data in legacy_data.items() 
        for point in data
    }