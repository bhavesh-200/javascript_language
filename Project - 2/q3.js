function identifyCharType(char) {
    const vowels = 'aeiouAEIOU';
    if (char >= '0' && char <= '9') {
        return 'Digit';
    } else if (vowels.includes(char)) {
        return 'Vowel';
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        return 'Consonant';
    } else {
        return 'Special Character';
    }
}
