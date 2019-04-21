var forge = require('node-forge');

export const SECRET_KEY = "B374A26A71490437AA024E4FADD5B497FDFF1A8EA6FF12F6FB65AF2720B59CCF";

//Check if object is empty
export const _isEmptyObjectHelper = obj => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

//Encrypt data AES 256
export const _encryptHelper = (secureData) => {
    var key = forge.random.getBytesSync(64);
    var iv = forge.random.getBytesSync(64);
    var cipher = forge.cipher.createCipher('AES-CBC', SECRET_KEY);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(secureData));
    cipher.finish();
    var encrypted = cipher.output;
    return encrypted;
}

export const _sortByKeyArrHelper = (array, key, type='all') => {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}