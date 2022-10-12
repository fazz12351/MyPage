function romantoInt(romanNumber){
    let sum=0;
    let number=[["i",1],["v",5],["x",10],["l",50],["c",100],["d",500],["m",10]]

    for(var i=0;i<romanNumber.length;i++){
       for(var j=0;j<number.length;j++){

        if(romanNumber[i]==number[j][0]){
            sum+=number[j][1];
            console.log(sum)
        }
        
       }
    }


}
let a=romantoInt("xii");
