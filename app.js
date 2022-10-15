function isPalindrome(x) {
    var number = x,
        output = [],
        output1 = [],
        sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    // console.log(output);
    for (var i = output.length - 1; i >= 0; i--) {
        output1.push(output[i])
    }

    for (var u = 0; u < output.length; u++) {
        for (var k = 0; k < output1.length; k++) {
            if (output[u] === output1[k]) {
                return true
            } else {
                return false
            }
        }
    }


}

let a = isPalindrome(132)
console.log(a)