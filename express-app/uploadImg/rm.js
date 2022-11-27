cp = require('child_process')

cp.execSync('rmdir /s/q .\output ', {encoding: "binary"} ,function(err, stdout, stderr) {
    if (err) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
    }
    //console.log(err, stdout, stderr);
    console.log('data : ' + stdout);
})

console.log("clear finished!")

