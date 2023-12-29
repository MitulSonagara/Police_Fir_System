const { exec } = require('child_process');

exec('python python_subprocess.py', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    console.log(`Python Script Output: ${stdout}`);
});
