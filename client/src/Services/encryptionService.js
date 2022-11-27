import actualPasscode from '../Data/passcode.json'

export const savePasscode = (passcode) => {
    const newPasscode = encryptPasscode(passcode);
    const newPasscodeObject = {"passcode": newPasscode}
    const jsonObj = JSON.stringify(newPasscodeObject);
    const blob = new Blob([jsonObj], {type: "text/plain"})
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a');
    link.download = "../Data/passcode.json";
    link.href = url;
    link.click();
}

const encryptPasscode = (passcode) => {
    let newPasscode = "";
    for(let i = 0; i < passcode.length; i++) {
        newPasscode = newPasscode.concat(passcode.charCodeAt(i));
    }
    return newPasscode;
}

export const checkPasscode = (passcode) => {
    const userPasscode = encryptPasscode(passcode);
    return actualPasscode.passcode == userPasscode;
}