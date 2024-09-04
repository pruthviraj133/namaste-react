function longestpalindrome(s){
    if(s.length === 0){
        return "";
    }

    let longestpalindrome = "";
    let maxLength = 0;

    for(i = 0; i < s.length; i++){
        // odd length palindrome
        let left = i;
        let right = i;
        while(left >=0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > maxLength){
                maxLength = right - left + 1;
                longestpalindrome = s.substring(left, right + 1);
            }
            left--;
            right++;
        }

        left = i;
        right = i+1;
        while(left >=0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > maxLength){
                maxLength = right - left + 1;
                longestpalindrome = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }

    return longestpalindrome;
}

const inputString = "aserrest";
const result = longestpalindrome(inputString);
console.log(result);
