var fs = require("fs");
/*fs.readFile('package.json', function (err, data) {
    if (!err) {
        console.log(data);
    }
    else {
        console.log(err);
    }
});
*/
console.log("something else");
async function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('asd.txt', 'utf8', function (err, data) {
            if (err) {
                return reject(err)
            }
            return resolve(data);
        });
    });
}

(async () => {
    console.log('before first await');
    try{
    const data = await readFile();
    console.log(data);
    console.log('after first await');
    const data1 = await readFile();
    console.log('after second await');
    const data2 = await readFile();
    console.log(data2, 'after third await');

    } catch(e) {
        console.log(e);
    }
    console.log('qqqqqqqqqqqq');
})();

fs.readFile('asd.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('data', data);
  });

console.log('after await');
