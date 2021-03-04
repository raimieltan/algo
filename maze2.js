const tempMax = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
const visited = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let currentSum = 0
const totalSum = 0

const n = 3
const m = 3

const matrix = [
    [1, 0, 6],
    [8, 3, 7],
    [2, 4, 9]
]

const path = []
const maze2 = (posX, posY) => {
    
    if(posX === n-1 && posY === m-1 ){
     
        return matrix[posX][posY]
    }

    if(visited[posX][posY] !== 0){
        
        return tempMax[posX][posY]
    }

   
    visited[posX][posY] = 1;
    

    let totalSum = 0


    if(posX < n - 1 && posY < m - 1){
        
        currentSum = Math.max( maze2(posX, posY + 1), Math.max(maze2(posX + 1, posY + 1) , maze2(posX + 1 , posY)))
        
        totalSum = matrix[posX][posY] + currentSum
   
       
    }


    else if (posX == n - 1){
        totalSum = matrix[posX][posY] + maze2(posX, posY + 1)
        
     
        
    }

    else{
        totalSum = matrix[posX][posY] + maze2(posX + 1, posY)
  
       
    }
    
  

    tempMax[posX][posY] = totalSum

    

    return totalSum
}

console.log(maze2(0,0))
console.log(path)

