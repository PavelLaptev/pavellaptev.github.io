import json
import os

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW_INPUT = '/tmp/plugins_response.json'
OUTPUT = os.path.join(REPO_ROOT, 'public', 'plugins.json')

CLONED_PLUGINS = {"1050439261870735490", "1052604096433126717"}

def to_short_num(n):
    if n < 1_000:
        return str(n)
    return f"{n/1_000:.1f}k"

with open(RAW_INPUT) as f:
    data = json.load(f)

plugins = []
for plugin in data.get('meta', []):
    pid = plugin['id']
    if pid in CLONED_PLUGINS:
        continue
    version = list(plugin.get('versions', {}).values())[0] if plugin.get('versions') else None
    if not version:
        continue
    plugins.append({
        'name': version.get('name', ''),
        'url': f'https://www.figma.com/community/plugin/{pid}',
        'iconUrl': f'/assets/plugins/{pid}-icon.png',
        'likes': plugin.get('like_count', 0),
        'likesShort': to_short_num(plugin.get('like_count', 0)),
        'runs': plugin.get('unique_run_count', 0),
        'runsShort': to_short_num(plugin.get('unique_run_count', 0)),
    })

plugins.sort(key=lambda x: x['runs'], reverse=True)

with open(OUTPUT, 'w') as f:
    json.dump(plugins, f, ensure_ascii=False, indent=2)

print(f"Written {len(plugins)} plugins to {OUTPUT}")
