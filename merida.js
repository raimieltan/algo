class Enemy {
    constructor(x, y, hp = 300) {
      this.x = x
      this.y = y
      this.hp = hp
    }
  
    damage(amount) {

      // deduct hp by amount
      this.hp -= amount
    }
  
    isDead() {
        if(hp <= 0){
            return true
        }
        else{
            return false
        }
      // fill this up
    }
  }
  
  class Archer {
    constructor(arrows, field, damage = 40) {
      this.x = 0 // starts at the leftmost square
      this.kills = 0
  
      this.arrows = arrows
      this.field = field
      this.damage = damage
    }
  
    moveLeft() {
        if(!this.x <= 0){
            this.x++
        }
    
      // moves 1 square to the left, but does nothing if at the leftmost edge
    }
  
    moveRight() {
        if(!this.x >= this.field[0].length){
            this.x++
        }
      // moves 1 square to the right, but does nothing if at the rightmost edge
    }
  
    shoot() {
        if(!this.outOfArrows()){

        }

      // shoots all enemies in the current column, does nothing if out of arrows
    }
  
    outOfArrows() {
        if(this.arrows <= 0){
            return true
        }
      // detect if out of arrows
    }
  }
  
  class Field {
    constructor(rows = 11, cols = 10) {
      this.grid = []
      this.numRows = rows
      this.numCols = cols
  
      for (let i = 0; i < this.numCols; i++) {
        const column = []
        for (let j = 0; j < this.numRows; j++) {
          column.push(null)
        }
        this.grid.push(column)
      }
    }
  
    static loadFromFileContents(contents) {
      // create a field from file contents, usage should be:
      // const field = Field.loadFromFileContents("10 x 11 / (5, 2), (5, 3), (2, 4)")
    }
  
    placeEnemy(x, y) {
      this.grid[x][y] = new Enemy(x ,y)
    }
  
    vacateTile(x, y) {
      this.grid[x][y] = null
    }
  
    getEnemiesAtColumn(column) {
      // gets all "alive" enemies in the given column number
    }
  
    damageEnemiesAtColumn(column, initialDamage) {
      // damage all enemies given the column number
    }
  }
  