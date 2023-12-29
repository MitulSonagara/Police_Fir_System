import pymongo
from datetime import datetime

# Connect to MongoDB
client = pymongo.MongoClient("your_mongodb_connection_string")
db = client["your_database_name"]
complaints_collection = db["complaints"]

def search_by_location(location):
    query = {"location": location}
    return execute_query(query)

def search_by_name(name):
    query = {"name": name}
    return execute_query(query)

def search_by_date_time(date, time):
    datetime_str = f"{date} {time}"
    datetime_obj = datetime.strptime(datetime_str, "%Y-%m-%d %I:%M %p")
    query = {"datetime": {"$eq": datetime_obj}}
    return execute_query(query)

def execute_query(query):
    try:
        result = complaints_collection.find(query)
        return list(result)
    except Exception as e:
        print(f"Error: {e}")

# Example Usage:
location_search_result = search_by_location("Some Location")
print("Search Result by Location:")
print(location_search_result)

name_search_result = search_by_name("Some Name")
print("Search Result by Name:")
print(name_search_result)

date_time_search_result = search_by_date_time("2023-01-01", "12:00 PM")
print("Search Result by Date and Time:")
print(date_time_search_result)
