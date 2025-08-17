const con=document.getElementById('container')
const arr=["./assets/galaxy-s24-ultra-highlights-color-carousel-exclusive.jpg",
    "./assets/galaxy-s25-ultra-features-kv.jpg"  ,
    "./assets/Ring_Size_Choice_PC_1600x864.jpg",
   "./assets/in-feature-epic-screen--epic-play-547221631.avif",
    "./assets/in-feature-galaxy-buds-core-r410-547816213.avif",
    "./assets/galaxy-watch8-kv.jpg" 
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