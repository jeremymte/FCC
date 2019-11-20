function repeatStringNumTimes(str, num) {
    const repeatedStr = [];

    if (num < 1) {
        return "";
    }
    for (var i = 0; i < num; i++) {
        repeatedStr.push(str);
    }
    return repeatedStr.join('');
}

repeatStringNumTimes("abc", 3);