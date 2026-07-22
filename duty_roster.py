import pandas as pd
from datetime import datetime, timedelta
import random


# Police Staff List
staff = [
    "PC राम सिंह",
    "PC अमित कुमार",
    "PC मोहित",
    "PC दीपक",
    "PC रवि",
    "PC सुनील",
    "PC विकास"
]


# Duty Types
duties = [
    "Cheeta Duty",
    "Beat Duty",
    "Night Patrolling",
    "PCR Duty",
    "Office Duty"
]


# Month Details
year = 2026
month = 7

start_date = datetime(year, month, 1)

days = pd.date_range(
    start=start_date,
    periods=31
)


roster = []


index = 0

for date in days:

    for duty in duties:

        person = staff[index % len(staff)]

        roster.append({
            "Date": date.strftime("%d-%m-%Y"),
            "Duty": duty,
            "Name": person
        })

        index += 1



# Convert to Excel

df = pd.DataFrame(roster)


file_name = "Police_Duty_Roster_July_2026.xlsx"

df.to_excel(
    file_name,
    index=False
)


print("Duty Chart Created Successfully")
print(file_name)