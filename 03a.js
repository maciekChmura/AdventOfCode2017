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

for (let i = 5; i < spiral.length; i++) {
  let curr = spiral[i];
  let prev = spiral[i - 1];
  let dir = prev[3];
  if (dir === 4) {
    updateCoord(0, -1)
  } else if (dir === 1) {
    updateCoord(1, 0)
  } else if (dir === 2) {
    updateCoord(0, 1)
  } else {
    updateCoord(-1, 0)
  }

  function updateCoord(x, y) {
    curr[1] = prev[1] + x; //
    curr[2] = prev[2] + y; //
    let canChangeDir = true;
    for (let j = 0; j < spiral.length; j++) {
      if (curr[1] === spiral[j][1] && curr[2] === spiral[j][2]) {
        canChangeDir = false;
      }
    }
    if (canChangeDir) {
      dir = (dir + 1) % 4
    }
    curr[3] = dir;
  }
}




console.log(spiral);