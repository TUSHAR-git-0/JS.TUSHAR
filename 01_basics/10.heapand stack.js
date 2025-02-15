// two kind of memory 

// 1. Stack memory   :  stack memory m sabhi primitive datatype store hote h
// 2. Heap memory    :  heap memory m sabhi non primitive datatype store hote h


// stack m copy of value store hoti h
// heap m reference store hoti h( change in original value will also change the reference value)

let ytchannel = "tushar sharma" //  move to stack memory
let anothername="ytchannel";
 console.log(ytchannel,anothername); // tushar sharma tushar sharma

 Case 2;
     let ytchannel2 = "tushar sharma" //  move to stack memor
     let anothername2=ytchannel2 //  move to stack memory   (tushar sharma ki copy bna di h)'
         console.log(anothername2); // tushar sharma
    
         anothername2="ayushattri"; //  move to stack memory


        console.log(ytchannel2,anothername2); // tushar sharma ayushattri  (anothername2 ki value change hui h but, ytchannel2 ki value change nhi hui h)

        // 2nd case m ytchannel2 ki value change nhi hui h because ytchannel2 ki copy anothername2 m store hui h
        



//learn heap

let user1={
    name:"tushar",
    age:21,
    class:"12th",
}

let user2=user1; // reference copy hui h heap memory m

user2.age=66; // heap memory m change hua h

// refrence milta h heap memory m

console.log(user1.age,user2.age); // 66 66  (user1 ki value bhi change hui h)