
let tomb = [];
let szazTomb = [];

class Szazlabu
{
    #labakszama;

    constructor(labakszama)
    {
        this.#labakszama = labakszama
    }

    toString()
    {
        console.log(this.#labakszama + " lábú százlábú")
    }
}


function labakbolSzazlabuk(szazTomb)
{
   let kimenet = new Szazlabu(szazTomb);
   console.log(kimenet);
}

document.addEventListener('DOMContentLoaded',()=>{
    for(let i = 0; i < 20; i++){
       let rnd = Math.floor(Math.random() * 29)+1;
       tomb[i] = rnd;
    }

    tomb.forEach((e,index)=>{
        console.log(index+". "+e);
    });

 
    document.getElementById('valogatas').addEventListener('click', () => {
        ujTomb = [];
        ujTomb = tomb.filter(e => e%5==0);
        ujTomb.forEach((e,index)=>{
            console.log(index+1+". "+e);
            });      
    })

   
    document.getElementById('hozzaad').addEventListener('click', () => {
        let szam = parseInt(document.getElementById('szam').value);
        tomb.push(szam);
        console.log(tomb);
    })
});