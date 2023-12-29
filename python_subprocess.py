import subprocess

result = subprocess.run(['node', 'node_child_process.js'], capture_output=True, text=True)
print(result.stdout)
