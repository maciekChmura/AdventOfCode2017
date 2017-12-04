/*
value, x, y, direction

direction: where number wants to create new element
1 = right
2 = up
3 = left
4 = down

*/

function createSpiral(input) {
  let spiral = [
    [1, 0, 0, 0],
    [2, 1, 0, 3],
    [3, 1, 1, 4],
    [4, 0, 1, 4],
    [5, -1, 1, 4],
  ];
  for (let i = 4; i < input; i++) {

    let x = -1;
    let y = 1;
    let direction = spiral[i][3]
    //check if there is a empty space to create new element
    //direction of 5 is 4 -> down

    if (direction === 4) {
      let newX = x;
      let newY = y - 1;
      // let newDirection = direction % 4 + 1

      spiral.push([i + 1, newX, newY, direction])
      x = newX;
      y = newY;
    }

  }
  //1. check if there is space to create an element based on direction
  //2. if there is no space create new element in the same direction
  // 2a increment x and y
  //3. if there is empty space:
  // 3a. change direction
  // 3b. create new element 



  return spiral;
}
console.log((4 + 0) % 4);

console.log(createSpiral(23));