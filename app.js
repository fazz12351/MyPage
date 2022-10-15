

let myarra=["flight","flask"]
function isPalindrome(array) {
    currentWord=""
    currentwordarray=[]
    newword=[];
    for(var i=0;i<array.length;i++){
        currentWord=array[i];
        currentwordarray.push(currentWord)
       
        for(var j=0;j<currentWord.length;j++){
            console.log(currentWord[j])
            newword.push(currentWord[j])

        }
    }
    console.log(newword)

  




}


isPalindrome(myarra)
