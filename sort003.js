let array = [2,3,5,4,8,1]

function ms(arr){
    if(arr.length < 2){

        return arr
    }

    let middleIndex = Math.floor(arr.length / 2)

    let firstHalf = arr.slice(0, middleIndex)
    let secondHalf = arr.slice(middleIndex, arr.length)

    
    return m(ms(firstHalf), ms(secondHalf))
}

const  m = (arr1, arr2) => {
    let merged = [...arr1, ...arr2]

    merged.sort((a,b) => {a-b})
    console.log(merged)
    return merged
}


console.log(ms(array))

