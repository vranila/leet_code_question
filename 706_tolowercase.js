/*Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.


Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"
 

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.*/


/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // s=s.toLowerCase();
    // return s;
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="";
    let result="";
    let i=0;

    while(s[i] !== undefined)
    {
        let j=0;
        let converted=false;
        while(s[i] !==undefinded)
        {
            if(s[i] === upper[j])
            {
                result=result + lower[j]
                converted=true;
                break;
            }
             j=j+1;
        }

        if(!converted)
        {
               result=result + s[j]
        }
          i=i+1;
    }
 return result;
    
}