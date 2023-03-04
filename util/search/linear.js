function linear(arr,n){

    let n =1;
    let res=0

    for(let i=0; i<arr.length;i++){

        if(arr[i]==n){
            res=0
            return 0
        }
        else if(i==arr.length-1){
            res=1
        }
    }

    if(res==0){
        console.log("contem")
    }
    else{
        console.log("nao contem")
    }
    
}

module.exports = linear