
# %%
import numpy as np
import pandas as pd
import json

# %%
df = pd.read_csv("preprocessing/tv_keyparts.tsv", sep='\t')


models = []
suffixes = []

for m in df.MODEL:
    ms = m.split('/')
    
    models.append(ms[0])
    if len(ms) == 2:
        suffixes.append(ms[1])
    else:
        suffixes.append('')


df.MODEL = models
df.insert(3, "suffix", suffixes)

df = df.drop_duplicates()

# %%
unique_models = np.unique(models)

# %%
res = {}

for um in unique_models:
    temp = df.query(f"MODEL == '{um}'").drop("MODEL", axis=1)
    templ = []
    for _, row in temp.iterrows():
        templ.append(dict(row.dropna()))
    
    res[um] = templ

# %%
with open("db.json", 'w') as f:
    json.dump(res, f, indent=2)