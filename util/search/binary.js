function search(arr,n){

    let res=0
    let m=parseInt(arr.length/2)
    let p=m
    let f=parseInt(arr.length)
    let i=1

    function binarysearch(p){

        if(arr[p]==n){
            return 0
        }

        if((f-p)<=0){
            return 1
        }

        if(n<arr[p]){
            f=p-1
            p=parseInt((f-i)/2)
            res = binarysearch(p)
            return res
        }
        else if(arr[p]<n){
            i=p+1
            p=parseInt((f+i)/2)
            res = binarysearch(p)
            return res
        }
    }



    if (binarysearch(p)==0){
        console.log("Contem")
    }
    else{
        console.log("Nao Contem")
    }

}

module.exports = search