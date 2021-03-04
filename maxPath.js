

// const n = 3
// const m = 3

// const matrix = [
//     [1, 0, 6],
//     [8, 3, 7],
//     [2, 4, 9]
// ]

// const matrix = [
//     [1,1,1],
//     [1,1,1],
//     [1,1,1]
// ]

const n = 4
const m = 4
const matrix = [
    [1,3,2,1],
    [5,3,2,1],
    [1,7,3,1],
    [1,3,1,1]
]

const path = []

const maxPath = (x, y) => {


    if(x === n - 1 && y === m - 1 ){
        path.push([x,y])
    }

    if(x < n && y < m){


        if(x === n - 1){
            path.push([x,y])
            maxPath(x, y + 1)

        }
        else if(y === m - 1){
            path.push([x,y])
            maxPath(x + 1, y)
        }
        else if(matrix[x + 1][y] >= matrix[x][y + 1]){
            path.push([x,y])
            maxPath(x + 1, y)
        }

        else{

            path.push([x,y])
            maxPath(x, y + 1)

        }
       
        
    }
  
    


}

maxPath(0, 0)
console.log(path)