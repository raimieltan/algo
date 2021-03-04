
const maze = [
    [1,3], // 0
    [0,2], // 1
    [1], // 2
    [0,4,6], // 3
    [3,5,7], // 4
    [4], // 5
    [3], // 6
    [4,8],
    [7] // 8
]


const path = []
const visitedPossiblePath = []
const backtrackMaze = (maze, start, finish, visitedPossiblePath, path) => {
 
    if(start === finish) {
 
        path.push(start)
        return true
    }

    visitedPossiblePath.push(start)
    
    for(let i = 0; i < maze[start].length; i++){
    
        if(!visitedPossiblePath.includes(i)){
        
          
            if(backtrackMaze(maze, maze[start][i], finish, visitedPossiblePath, path)){
                

                path.push(start)

                if(path.sort()[path.length - 1] == finish){
           
                    return path
                }
            
            
                return true
            }

        }
 


    }


    return false

    

}


console.log(backtrackMaze(maze, 0,8, visitedPossiblePath, path))



//check up down left right