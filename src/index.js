module.exports = function toReadable(number) {
    const z = "zero";
    const u = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const t = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const d = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let str = number.toString();
    let strLength = str.length;
    let arrItem;
    let result = "";

    // Ноль
    if (number === 0) {
        arrItem = z;
    }
    // Число состоит из одной цифры
    else if (strLength === 1) {
        arrItem = u[number - 1];
    }

    // Число состоит из двух цифр
    else if (strLength === 2) {
        if (str[0] == 1) {
            arrItem = t[number - 10];
        } else if (str[1] == 0) {
            arrItem = d[str[0] - 2];
        } else {
            arrItem = d[str[0] - 2] + " " + u[str[1] - 1];
        }
    }

    // Число состоит из трех цифр
    else if (strLength === 3) {
        if (str[1] == 0) {
            if (str[2] == 0) {
                arrItem = u[str[0] - 1] + " hundred";
            } else {
                arrItem = u[str[0] - 1] + " hundred " + u[str[2] - 1];
            }
        } else if (str[1] == 1) {
            arrItem = u[str[0] - 1] + " hundred " + t[str[2]];
        } else if (str[2] == 0) {
            arrItem = u[str[0] - 1] + " hundred " + d[str[1] - 2];
        } else {
            arrItem =
                u[str[0] - 1] +
                " hundred " +
                d[str[1] - 2] +
                " " +
                u[str[2] - 1];
        }
    }

    result = `${result}${arrItem}`;

    return result;
};
