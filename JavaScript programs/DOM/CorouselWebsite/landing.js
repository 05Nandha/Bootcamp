const con=document.getElementById('container')
const arr=["./assets/waterfall.jpg",
    "./assets/glacier.jpg",
    "./assets/eve.jpg",
    "./assets/for.jpg",
    "./assets/mountain.jpg",
    "./assets/alg.jpg"
]

let i=0;
let changeimg=()=>{
      i++;
    if(i==arr.length){
        i=0;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
  

}
let changeimg1=()=>{
    i--;
    if(i==-1){
        i=5;
    }
    con.style.backgroundImage=`url('${arr[i]}')`;
    

}

let change=(a)=>{
    con.style.backgroundImage=`url('${arr[a]}')`;
}

setInterval(() => {
    changeimg()
}, 2000);