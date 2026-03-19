/* Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
  */


/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s){
    let word="";
    let result="";
    for(let i=0 ; i<s.length ; i++)
    {
        if(s[i] != " ")
        {
            word = s[i] + word;
        }
        else
        {
            if (word != "") 
            {
                result=result+word+" ";
                word=""
            }
        }
    }
     result=result+word
     return result;

}


//or using built in function

 // s =s.split("").reverse().join("").split(" ").reverse().join(" ")
// return s