const testBoard = [
    [0,0,0,7,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],
    [0,0,0,4,3,0,2,0,0],

    [0,0,0,0,0,0,0,0,6],
    [0,0,0,5,0,9,0,0,0],
    [0,0,0,0,0,0,4,1,8],

    [0,0,0,0,8,1,0,0,0],
    [0,0,2,0,0,0,0,5,0],
    [0,4,0,0,0,0,3,0,0],
]



const printBoard = (grid) => {
    for(let i =0; i < grid.length; i++){
        if(i % 3 === 0 && i !== 0){
            console.log("- - - - - - - - - - - -")
        }
        for(let j = 0; j < grid[0].length; j++ ){
            if(j % 3 === 0 && j !== 0){
                process.stdout.write(" | ")
            }
            if(j == 8){
                console.log(grid[i][j])
            }
            else{
                process.stdout.write(grid[i][j] + " ")
            }
        }
    }
}


const findEmpty = (grid) => {
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 0){
                return [i,j]
                
            }
        }
    }

    return [null, null]
}

const checkValid = (grid, num, row, col) => {

    // check row
    for(let i = 0; i < grid[0].length;i++){
        if(grid[row][i] === num){
            return false
        }
    }

    //check col

    for(let i = 0; i < grid.length;i++){
        if(grid[i][col] === num){
            return false
        }
    }


    //check subgrid

    const pos = {
        x : Math.floor(row / 3),
        y : Math.floor(col / 3)
    }
    
    for(let subRow = pos.x * 3; subRow < pos.x * 3 + 3; subRow++){
        for(let subCol = pos.y * 3; subCol < pos.y * 3 + 3; subCol++){
            if(grid[subRow][subCol] === num){
                return false
            }
        }
    }

    return true

}


const solve = (grid) => {

   
    let pos = {
        x: findEmpty(grid)[0],
        y: findEmpty(grid)[1]
    }

    if(pos.x === null || pos.y === null){
        
        return true
    }


    for(let i = 1; i <= 9; i++){    
        if(checkValid(grid, i, pos.x, pos.y)){
 
            grid[pos.x][pos.y] = i

            if(solve(grid)){
                return grid
            }
            else{
                grid[pos.x][pos.y] = 0
            }

           
        }
        
    }

    

}

printBoard(solve(testBoard))