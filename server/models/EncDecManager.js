// const crypto = require("crypto");

// const encrypt = (userPass) =>
// {
//     // DECLARING AND IV (basically an identifier for decryption)
//     const iv = new Buffer.from(crypto.randomBytes(16));
//     var ivstring = iv.toString('hex').slice(0, 16);

//     // CREATING A CIPHER (actual encryption)
//     const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(process.env.CRYPTO_SECRET_KEY), ivstring);

//     cipher.update(userPass, 'utf8', 'base64');
//     const bufferEncryptedPassword = cipher.final('base64');

//     return {
//         iv: ivstring,
//         encryptedPassword: bufferEncryptedPassword
//     }     
// }

// const decrypt = (encrypted, ivstring) =>
// {
//     const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(process.env.CRYPTO_SECRET_KEY), ivstring);

//     decipher.update(encrypted, "base64", "utf8");
//     const decryptedPassword = decipher.final("utf8");

//     return decryptedPassword;
// }

// module.exports = { encrypt, decrypt };

const crypto = require("crypto");

// Convert hex string to Buffer
const keyBuffer = Buffer.from(process.env.CRYPTO_SECRET_KEY, 'hex');

const encrypt = (userPass) => {
    // Generate a random 16-byte IV
    const iv = crypto.randomBytes(16);
    const ivstring = iv.toString('hex');

    // Create cipher using the key buffer
    const cipher = crypto.createCipheriv("aes-256-cbc", keyBuffer, iv);

    let encryptedPassword = cipher.update(userPass, 'utf8', 'base64');
    encryptedPassword += cipher.final('base64');

    return {
        iv: ivstring,
        encryptedPassword: encryptedPassword
    }     
}

const decrypt = (encrypted, ivstring) => {
    const iv = Buffer.from(ivstring, 'hex');
    const decipher = crypto.createDecipheriv("aes-256-cbc", keyBuffer, iv);

    let decryptedPassword = decipher.update(encrypted, "base64", "utf8");
    decryptedPassword += decipher.final("utf8");

    return decryptedPassword;
}

module.exports = { encrypt, decrypt };