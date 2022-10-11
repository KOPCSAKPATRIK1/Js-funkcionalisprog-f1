
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
        return (this.#labakszama + " lábú százlábú");
    }
}


function labakbolSzazlabuk(kapottTomb){

    kapottTomb.forEach((e,index)=>{
        let sz = new Szazlabu(e);
        szazTomb.push(sz);
    });

    szazTomb.forEach((e)=>{
        e.toString();
    })

};

function szazlabuMegjelenit(id, szazTomb)
{
    let ul = document.getElementById(id);
    szazTomb.forEach((e) => {
        let li = document.createElement('li');
        li.innerHTML = e.toString();
        ul.appendChild(li);
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    for(let i = 0; i < 20; i++){
       let rnd = Math.floor(Math.random() * 29)+1;
       tomb[i] = rnd;
    };

    tomb.forEach((e,index)=>{
        console.log(index+". "+e);
    });

 
    document.getElementById('valogatas').addEventListener('click', () => {
        ujTomb = [];
        ujTomb = tomb.filter(e => e%5==0);
        ujTomb.forEach((e,index)=>{
            console.log(index+1+". "+e);
            });      
    });

   
    document.getElementById('hozzaad').addEventListener('click', () => {
        let szam = parseInt(document.getElementById('szam').value);
        tomb.push(szam);
        console.log(tomb);
    });

    labakbolSzazlabuk(tomb);
    szazlabuMegjelenit('szazLista', szazTomb);

});