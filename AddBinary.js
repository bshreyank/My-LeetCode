
/*Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // `ob${string}` - in template literals, convert's the string to binary.
    // And we store the converted value in a variable.
    const aBinary = `0b${a}`;       
    const bBinary = `0b${b}`;

    //We perform the sum operation, using that variables.
    const sum = BigInt(aBinary) + BigInt(bBinary);
    
    // while returning answer we again convert Binary to String using toString function.
    // It is also important to give 2 in toString(2) function as we can have only two value 0 and 1 in the binary format. 
    return sum.toString(2);

};