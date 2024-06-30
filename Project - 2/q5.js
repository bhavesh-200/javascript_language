function classifyNumber(num) {
    if (num > 0 && num % 2 === 0) {
        return 'Positive Even';
    } else if (num > 0 && num % 2 !== 0) {
        return 'Positive Odd';
    } else if (num < 0 && num % 2 === 0) {
        return 'Negative Even';
    } else if (num < 0 && num % 2 !== 0) {
        return 'Negative Odd';
    } else {
        return 'Zero';
    }
}
