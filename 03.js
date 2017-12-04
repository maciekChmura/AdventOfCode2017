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
    [6, null, null, 0],
    [7, null, null, 0],
    [8, null, null, 0],
    [9, null, null, 0],
  ];
  //check if there is space to create an element based on direction
  //  loop the spiral to search for specific x and y
  for (let i = 4; i < 9; i++) {
    const element = spiral[i];
    let x = element[1];
    let y = element[2];
    if (element[3] === 1) {
      for (let j = 0; j < i + 1; j++) {
        const coord = spiral[j];
        let xToCheck = x + 1;
        let yToCheck = y;
        if (spiral[j][1] == null && spiral[j][2] == null) {
          spiral[i + 1][0] = i + 2;
          spiral[i + 1][1] = xToCheck;
          spiral[i + 1][2] = yToCheck;
          spiral[i + 1][3] = (spiral[i][3] + 1) % 4;
          break;
        }
      }
      spiral[i + 1][0] = i + 2;
      spiral[i + 1][1] = x;
      spiral[i + 1][2] = y - 1;
      spiral[i + 1][3] = spiral[i][3];
    } else if (element[3] === 2) {
      for (let j = 0; j < i + 1; j++) {
        const coord = spiral[j];
        let xToCheck = x;
        let yToCheck = y + 1;
        if (spiral[j][1] == null && spiral[j][2] == null) {
          spiral[i + 1][0] = i + 2;
          spiral[i + 1][1] = xToCheck;
          spiral[i + 1][2] = yToCheck;
          spiral[i + 1][3] = (spiral[i][3] + 1) % 4;
          break;
        }
      }
    } else if (element[3] === 3) {
      for (let j = 0; j < i + 1; j++) {
        const coord = spiral[j];
        let xToCheck = x - 1;
        let yToCheck = y;
        if (spiral[j][1] == null && spiral[j][2] == null) {
          spiral[i + 1][0] = i + 2;
          spiral[i + 1][1] = xToCheck;
          spiral[i + 1][2] = yToCheck;
          spiral[i + 1][3] = (spiral[i][3] + 1) % 4;
          break;
        }
      }
    } else { //4
      for (let j = 0; j < input; j++) {
        const coord = spiral[j];
        let xToCheck = x;
        let yToCheck = y - 1;
        if (spiral[j][1] == null && spiral[j][2] == null) {
          spiral[i + 1][0] = i + 2;
          spiral[i + 1][1] = xToCheck;
          spiral[i + 1][2] = yToCheck;
          spiral[i + 1][3] = (spiral[i][3] + 1) % 4;
          break;
        }


      }
    }
    console.log(spiral);


    //if there is no space create new element in the same direction
    //  increment x and y
    //if there is empty space:
    //  change direction
    //  create new element 


    // for (let i = 4; i < input; i++) {

    //   let x = -1;
    //   let y = 1;
    //   let direction = spiral[i][3]
    //   //check if there is a empty space to create new element
    //   //direction of 5 is 4 -> down

    //   if (direction === 4) {
    //     let newX = x;
    //     let newY = y - 1;
    //     // let newDirection = direction % 4 + 1

    //     spiral.push([i + 1, newX, newY, direction])
    //     x = newX;
    //     y = newY;
    //   }

    // }





  }
  return spiral;
}
console.log((4 + 0) % 4);

console.log(createSpiral(23));