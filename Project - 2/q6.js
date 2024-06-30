function calculateBill(units) {
    let bill = 0;
    if (units <= 100) {
        bill = units * 0.5;
    } else if (units <= 200) {
        bill = 100 * 0.5 + (units - 100) * 0.75;
    } else if (units <= 400) {
        bill = 100 * 0.5 + 100 * 0.75 + (units - 200) * 1.2;
    } else {
        bill = 100 * 0.5 + 100 * 0.75 + 200 * 1.2 + (units - 400) * 1.5;
    }
    return bill;
}
