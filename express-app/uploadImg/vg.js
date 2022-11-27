
// python .\vg\test.py --img_path C:\Users\duo\Desktop\reactJS\AWS\server\express-app\img\7.jpg --name output.jpg
// cmd = 'python ./vg/test.py '
// cmd = "python ./vg/test.py --img_path C:/Users/duo/Desktop/reactJS/AWS/server/express-app/img/7.jpg --name output.jpg"

genImg = (cmd) => {
    if(cmd === '')
        return
    cp = require('child_process')
    cp.execSync(cmd, {encoding: "binary"} ,function(err, stdout, stderr) {
        if (err) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        //console.log(err, stdout, stderr);
        console.log('data : ' + stdout);
    })
    console.log("run finished!")
}

// genImg(cmd)
module.exports = genImg;