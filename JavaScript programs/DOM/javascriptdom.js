let document={
    name:"Nandha",
    age:20,

    getElementById:(txt)=>{
       return `<h1>${txt}</h1>`;
    }
}
console.log(document.getElementById("hello"));
