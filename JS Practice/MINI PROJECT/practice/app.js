// let toDo = [];

// let req = prompt("Please Enter Your Requast");

// while(true){
//     if(req == "quit"){
//         console.log('quating app');
//         break;
//     }
//     else if(req == "list"){
//         console.log("_______________");

//         for(let i=0; i<toDo.length; i++){
//            console.log(i, toDo[i]);
//         }
//         console.log("_______________");
//     }
//     else if(req == "add"){
//         let task = prompt("ENTER THE TASK YOU WANT ADD");
//         toDo.push(task);
//         console.log("Task added");
//     }
//     else if (req == "delete") {
//         let inx = prompt("Please Enter THE NUMBER OF TASK THAT YOU WANT DELET");
//         toDo.splice(inx, 1);
//     }
//     else {
//     console.log("WRONG REQUST");
//     }
//     req = prompt("Please Enter Your Requast");
// }



let arr = [5, 6, 2, 7, 9 ,];
let num = 2;
function arrLarge(arr, num){
    for(let i=0;i<arr.length; i++){
        
        if(arr[i]> num ){
            console.log(arr[i]);
        }
       
    }
}
arrLarge(arr, num);