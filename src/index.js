
let tomb = [];

document.addEventListener('DOMContentLoaded',()=>{
    for(let i = 0; i < 20; i++){
       let rnd = Math.floor(Math.random() * 29)+1;
       tomb[i] = rnd;
    }

    tomb.forEach((e,index)=>{
        console.log(index+". "+e);
    });

 let ujTomb = tomb.filter(e => e%5==0);
 ujTomb.forEach((e,index)=>{
    console.log(index+". "+e);
    });


});