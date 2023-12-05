// 28. Find the Index of the First Occurrence in a String

/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack. 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
    
    // let i=0,j=0,k=0

    // while(i<haystack.length){
    //     while(needle[j]==haystack[k]){
    //         k++
    //         j++
    //         if(j==needle.length) return i
    //         if(k==haystack.length) return -1
    //     }
    //     if(needle[j] != haystack[k]){
    //         i++
    //         k=i
    //         j=0
    //     }
    // }
    // return -1
};