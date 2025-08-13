let arr=[10,23,32,32];
let search=42;

let Check=1;

for(let i=0;i<arr.length;i++)
    {
    if(arr[i]==search)
    {
        check=0;
        console.log(i);
        break;
    }
}
if(check)
{
    console.log("num not found");
}