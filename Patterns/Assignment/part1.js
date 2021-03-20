// მიზანი: დავადგინოთ ორი სტრინგი ერთიდაიგივე ასოებისგან შედგება თუ არა )
// პროცესი: ვითვლით რამდენჯერ მეორდება თითოეულში კონკრეტული ასო ( Char ) და ვადარებთ
// თითოეულ ქიზე ასოების რაოდენობა უნდა იყოს თანაბარი

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  // ამირანი = { 'ა': 2, 'მ': 1, 'ი': 2, 'რ': 1, 'ნ': 1 }
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


// areThereDuplicates Solution (Frequency Counter)
// დაითვალა გამეორებები და თუ 1ზე მეტია ესეიგი დუბლირებულია
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}


// areThereDuplicates Solution (Multiple Pointers)
// დასორტა ერეი ზრდადობით და ყოველი შემდგომი შეადარა ერთმანეთს, თუ ტოლია ე.ი დუბლირებული არსებობს
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}


// areThereDuplicates One Liner Solution
// თუ სეტში ჩაყრილის საიზი და საწყისის განსხვავებულია . 
// ე.ი სეტში მოხდა დუბლირებულის მოცილება და მიმდინარე ერეიში არსებობს დუბლირებულები
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}



