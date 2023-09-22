export function humanizeNumber(value: number, separator: string = " ") {
    let humanizeNumberString: string = "";
    let strNumber: string = String(value);
    let splittedStr: Array<string> = strNumber.split('.');
    let firstPart: string = splittedStr[0];
    let secondPart: string = "";
    splittedStr.length === 1 ? secondPart = '00' : secondPart = splittedStr[1];

    if (firstPart.length > 3) {
        let remainder = firstPart.length % 3;
        let leftPart: string;
        remainder > 0 ? leftPart = firstPart.substring(0, remainder) + separator : leftPart = ""
        let countRightParts = Math.floor(firstPart.length / 3);

        humanizeNumberString = leftPart;
        for (let i = remainder; i < firstPart.length; i = i + 3) {
            countRightParts--;
            humanizeNumberString += firstPart.substring(i, i + 3);
            if (countRightParts > 0) humanizeNumberString += separator;
        }
    } else humanizeNumberString = firstPart;

    return humanizeNumberString + `.${secondPart}`;
}
