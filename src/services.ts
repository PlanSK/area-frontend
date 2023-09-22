export function humanizeNumber(value: number, separator: string = " ") {
    let humanizeNumberString = "";
    let [firstPart, secondPart] = String(value).split('.');
    !secondPart && (secondPart = '00')

    if (firstPart.length > 3) {
        let remainder = firstPart.length % 3;
        let countRightParts = Math.floor(firstPart.length / 3);
        remainder > 0 && (humanizeNumberString = firstPart.substring(0, remainder) + separator)
        
        for (let i = remainder; i < firstPart.length; i = i + 3) {
            countRightParts--;
            humanizeNumberString += firstPart.substring(i, i + 3);
            countRightParts > 0 && (humanizeNumberString += separator)
        }
    } else humanizeNumberString = firstPart;

    return humanizeNumberString + `.${secondPart}`;
}
