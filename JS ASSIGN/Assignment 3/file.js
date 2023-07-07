
// find the vowels--

// let arr = ["rtyuioiygfdsasdfghjkjbvcxzxcvbnm"];
// count = 0;

// // let arr = promt ('Enter the vowel');
// // let arr = ["Pooja", "Vigesh","Sathish","Lavanya","Vikram"]
// let vowel = [];


// for (i=0; i<=arr.length-1; i++){
//     for (j=0; j<=arr[i].length-1; j++){

//         for (k=0; k<=abc.length-1; k++){
//             if(arr[i][j]==abc[k]){
//                 count++;
//                 vowel.push(arr[i][j]);
//             }
//         }
//     }
// }

// console.log(count);
// console.log(vowel);

// let arr = ["r","t","y","u","i","o","i","y","g","f","d","s","s","g","h","j","k","j","b","v","c","x"];
// let arrwow = arr.length;
// let vowels = ["a", "e", "i","i","o","u"]
// let wow = vowels.length;
// let count = 0;


// for(arrwow = arr.length; arrwow>0; arrwow--){
//     while(wow>0){
//       if(arr[arrwow-1]==vowels[wow-1]){
//         count++
//       }
//       wow--
//     }
//     wow=vowels.length;
// }
// console.log('number of vowels in an given array'+ ' ' + count)


// find the even numbers--

// let numbers = [4,5,6,7,8,90,2,34,567,8,9,0,1,2,34,56,7,8,9,0,1,2];
// let count = 0;

// function findEven(arr) {
//     var evenNumbers = [];
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//       }
//     }
//     return evenNumbers;
//   }

// var result = findEven(numbers);
// console.log(result);

// function countEven(arr){
// for(i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     count++
//   }
// }
// return count;
// }
// console.log('number of even numbers'+ ' ' + numbers);

// sum of first five--

function sumAnd(arr){
  let firstFiveSum = 0;
  let nee = [];
  for(i=0; i< arr.length; i++){
    if(i<10){
      firstFiveSum = firstFiveSum + arr[i];
      nee.push(arr[i]);
    }
  }
  
  nee.unshift(firstFiveSum)
  return nee;
  }
  
  let arr = [1,2,3,4,5,6,7,8,9,10];
  var result = sumAnd(arr);
  console.log(result);