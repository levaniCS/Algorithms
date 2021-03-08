
// First solution
function validAnagram(str1, str2) {
    if(str1.length !== str1.length) {
        return false
    }

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for(let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
     for(let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
   
   if(Object.keys(frequencyCounter1).length !== Object.keys(frequencyCounter2).length) {
       return false
   }

     for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }

    return true

}


// Second solution
function validAnagram(str1, str2) {
  if(str1.length !== str1.length) {
    return false
  }

  const lookup = {}

  for(let i = 0; i < str1.length; i++) {
      let letter = str1[i]
      // IF LETTER EXISTS, INCREMENT, OTHERWISE SET TO 1            
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }


  for(let i = 0; i < str2.length; i++) {
      let letter = str2[i]
      // cant find letter or letter is zero then it's not an anagram
      if(!lookup[letter]) {
          return false
      } else {
          lookup[letter] -= 1
      }
  }
  return true

}


validAnagram("anagram", "nagaram")