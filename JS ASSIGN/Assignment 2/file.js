// PRIME NUMBERS if/else method--

let num = prompt("Enter a number");
let count = 0;

for (i = 1; i <=num; i++) {
    if(num%i==0){
        count+=1;
    }
}

if(count==2){
    console.log(num + " " + "Is a Prime number");
}
else {
    console.log(num + " " + "Is not a Prime number")
}


// print prime number 1 to 100--

let count = 0;

for (j = 2; j <= 100; j++) {
    for (i = 1; i <=j; i++) {
        if ( j % i == 0 )
    count++;
    }


if (count==2) 
    console.log(j);
    count=0
}

// palindrome number--

let num = prompt('Enter the number')
let rev = 0
let val = num

while (0<num) {
    rev = rev*10 + num % 10;
    num = Math.floor(num/10);
}

if (rev == val) {
    console.log(val + " " + "Palindrome");
}
else {
    console.log(val+ " "+ "Is not a Palindrome");
}

// palindrome--

let val = 'MALAYALAM';
let new_val = "";
for(i=val.length-1; i>=0; i--) {
    new_val += val[i];
} 

if (val== new_val) {
    console.log(new_val + " " + "Is a Palindrome");
}

else {
    console.log(new_val + " " + "Is not a Palindrome");
}

// REVERSE NUMBER--

var num = 1234;
var sum = 0;

while (num>0){
  sum = sum + num%10;
  num = Math.floor(num/10);
}

console.log(sum);

