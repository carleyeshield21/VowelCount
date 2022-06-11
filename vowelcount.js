// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let vowelsCount = 0;
    let vowels = 'aeiou'
    str = str.toLowerCase()

    for(i=0; i<=vowels.length-1; i++){
        for(j=0; j<=str.length-1; j++){
            if(vowels[i] == str[j]){
                vowelsCount++
            }
        }
    }
console.log(`The string is ${str}\nNumber of vowels: ${vowelsCount}`)
}
getCount('cArleyeshield')
console.log('========')
getCount('abracadabra')