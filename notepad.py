import json
import os

file_path = "data.json"

with open(file_path, 'r') as file:
    data = json.load(file)
    
file_path

print(data)
