function firstAndLast(input){
    
    let k = input.shift();
     
    console.log(input.slice(0, k).join(" "));
    console.log(input.slice(-k).join(" "));
}
firstAndLast([2,7, 8, 9])
