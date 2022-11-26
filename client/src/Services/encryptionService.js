const savePasscode = (passcode) => {
    const fileSystem = require("fs")
    const newPasscode = encryptPasscode(passcode);
    const newPasscodeObject = {"passcode": newPasscode}
    fileSystem.writeFile('passcode.json', JSON.stringify(newPasscodeObject), (error) => {
        if (error) throw error;
    })
}

const encryptPasscode = (passcode) => {
    let newPasscode = "";
    for(let i = 0; i < passcode.length; i++) {
        newPasscode.concat(String(passcode.charCodeAt(i)));
    }
    return newPasscode;
}

const checkPasscode = (passcode) => {
    const userPasscode = encryptPasscode(passcode);

    const actualPasscode = fetch('../Data/passcode.json')
                            .then((response) => response.json())
                            .then((jsonData) => console.log(jsonData));
    
    return userPasscode == actualPasscode;
}
 
export default {savePasscode, checkPasscode};