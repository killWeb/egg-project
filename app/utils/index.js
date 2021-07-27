//promise 封装 sh.exec
function execAsync(command, options = {}, stdoutHandler) {
    return new Promise((resolve, reject) => {
        const sh = require("shelljs");
        const child = sh.exec(command, options, function (code, stdout, stderr) {
            if (code) {
                reject(new Error(stderr));
                return;
            }
            resolve({code, stdout, stderr});
        });
        child.stdout.on('data', (data) => {
            stdoutHandler && stdoutHandler(`${data}`);
        });
    });
}

module.exports = {
    execAsync
}