function distanceInMemory(input) {
  //starting spiral
  //each array represents: 
  //[value, x coordinate, y coordinate, direction of "vector" to next value]
  let spiral = [ //         2        value can have one 
    [1, 0, 0, 0], //        ^        of four possible vectors
    [2, 1, 0, 3], //  3 < value > 1
    [3, 1, 1, 4], //        v
    [4, 0, 1, 4], //        4
    [5, -1, 1, 4],
  ];

  //generate next values and add to spiral with null coordinates
  for (let s = 6; s <= input; s++) {
    spiral.push([s, null, null, 0])
  }

  //loop over spiral and calculate coordinates
  for (let i = 5; i < spiral.length; i++) {
    let curr = spiral[i];
    let prev = spiral[i - 1];
    let dir = prev[3];

    //check the "vector" value to detemine where to look for empty space
    //if there is space to put new value -> 
    //add it by updating coord 
    //and change vector
    //if not create value in the same vector and move on
    if (dir === 4) {
      updateCoord(0, -1, 1, 0)
    } else if (dir === 1) {
      updateCoord(1, 0, 0, 1)
    } else if (dir === 2) {
      updateCoord(0, 1, -1, 0)
    } else {
      updateCoord(-1, 0, 0, -1)
    }
    console.log(`currently updating ${i} of ${input}`);

    function updateCoord(x, y, dx, dy) {
      curr[1] = prev[1] + x; //
      curr[2] = prev[2] + y; //
      let canChangeDir = true;
      for (let j = 0; j < spiral.length; j++) {
        if (curr[1] + dx === spiral[j][1] && curr[2] + dy === spiral[j][2]) {
          canChangeDir = false;
        }
      }
      if (canChangeDir) {
        dir = (dir % 4) + 1
      }
      curr[3] = dir;
    }
  }

  let distance = Math.abs(spiral[input - 1][1]) + Math.abs(spiral[input - 1][2])
  return ` distance is: ${distance}`;

}

console.log(distanceInMemory(265149));