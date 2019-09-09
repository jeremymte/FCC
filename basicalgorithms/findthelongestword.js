function findLongestWordLength(str) {
    var words = str.split(" ");
    var length = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > length) {
            length = words[i].length;
        }
    }

    return length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");