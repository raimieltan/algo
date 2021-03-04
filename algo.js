let result = 0

function square(n){
    for(let i = 1; i <=n; i++){
        for(let j = 1; j<=n; j++){
            result +=1
        }
    }

    return result
}

console.log(square(2))