import pandas as pd
import json


df = pd.read_excel("duty.xlsx")


data = df.to_dict(orient="records")


with open(
    "data.js",
    "w",
    encoding="utf-8"
) as f:

    f.write(
        "const dutyData = "
    )

    json.dump(
        data,
        f,
        ensure_ascii=False,
        indent=4
    )

    f.write(";")

print("data.js created")