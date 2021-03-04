

const looper = (n) => {

    let limit = 256
    let count = 0

    while(count < limit - n){
        count += n
    }


    return count
}


console.log(looper(1))