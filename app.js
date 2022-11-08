function isPalidrone(x){
    let isPalidrone=false
    let NumToiString=x.toString();
    let reversed=NumToiString.split("").reverse("").join("");
    console.log(reversed)
    // let reversed=NumToiString.split("").reverse().join("")
    

    if(reversed===NumToiString){
        isPalidrone=true

    }
    else{
        isPalidrone=false
    }

    
    return isPalidrone;
 
}

let a =isPalidrone(169);
console.log(a)


