let num = parseInt(prompt("enter the number"));
let rev = 0;
let n1 = num;
 while(num>=1){
    let rem = parseInt(num%10);
    rev = rev * 10 +rem;
    num = num/10;
 }

 document.write(rev);
 if(rev == n1){
    document.write("palindrome");
 }
 else{
    document.write("not palindrome");
 }