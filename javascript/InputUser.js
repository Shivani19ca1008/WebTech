const x = parseInt(window.prompt("enter your number"));
// if(x<35){
//     document.write("fail")
// }
// else if(x>=35 && x<50){
//     document.write("D")
// }
// else if(x>=50 && x<60){
//     document.write("C")
// }
// else if(x>=60 && x<70){
//     document.write("B")
// }
// else if(x>=70 && x<70){
//     document.write("A")
// }
// else if(x>=70 && x<100){
//     document.write("A+")
// }
// else{
//    document.write("Invalid")
// }
switch(true){
    case (x<35):
        document.write("fail");
        break;
    case (x>=35 && x<50):
        document.write("D");
        break;
    case (x>=50 && x<60):
        document.write("C");
        break;
    case (x>=60 && x<70):
        document.write("B");
        break;
    case (x>=70 && x<80):
        document.write("A");
        break;
    case (x>=80 && x<100):
        document.write("A+");
        break;
    default:
        document.write("B");
        break;
}