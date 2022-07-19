function file(fileName) {
    var ext = fileName.split('.').pop();
    return ext;
}
var fName = file('admin.html');
console.log(fName);
var secFileNameFile = file('admin.js');
console.log(secFileNameFile);
