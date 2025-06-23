//   ( while loop)       or     ( do while loop)

// while(condition){
//     // code to be executed
// }

// first initialise/ declare  the  iterator first
// then check condition
// increment or decrement the value

let index =0;
while(index <= 10){
    console.log(index);
    index++;
}

let my_array= ["tushar ", "ayush","harshit","vikky"];
let index1=0;
while(index1<my_array.length){
    console.log(my_array[index1]);
    index1++;
}


//  in DO WHILE loop  { work is done first then condition would be check}


// only loop where ";" is used at the end of the loop

let score= 0;
do{
    console.log(`your score is:${score}`);
    score++;
    }while(score<=5);
    //  here first console.log will be executed then condition will be checked and then it will be repeated

let score1=11;
do{
    console.log(`your score is:${score1}`);
    score1++;
    }while(score1<=5);
