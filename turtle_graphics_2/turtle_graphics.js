class Turtle {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.direction = "east";
    this.footprint = [[this.x, this.y]];
  }

forward (amt) {

  if (this.direction === "east") {

    for (let index = 1; index <= amt; index++) {
      this.footprint.push([this.x+=1, this.y]);
    }
  } else if (this.direction === "south") {
    for (let index = 1; index <= amt; index++) {
      this.footprint.push([this.x, this.y-=1]);
    }
  } else if (this.direction === "west") {
    for (let index = 1; index <= amt; index++) {
      this.footprint.push([this.x-=1, this.y]);
    }
  } else if (this.direction === "north") {
    for (let index = 1; index <= amt; index++) {
      this.footprint.push([this.x, this.y+=1]);
    }
  }
  return this;
};


right(){
  if (this.direction === "east") {
    this.direction = "south";
  } else if (this.direction === "south") {
    this.direction = "west";
  } else if (this.direction === "west") {
    this.direction = "north";
  } else if (this.direction === "north") {
    this.direction = "east";
  }
  return this;
};

left() {
  if (this.direction === "east") {
    this.direction = "north";
  } else if (this.direction === "north") {
    this.direction = "west";
  } else if (this.direction === "west") {
    this.direction = "south";
  } else if (this.direction === "south") {
    this.direction = "east";
  }
  return this;
};

allPoints() {
  return this.footprint;
};

print() {
  let xMax = this.footprint[0][0];
  let yMax = this.footprint[0][1];
  let xMin = this.footprint[0][0];
  let yMin = this.footprint[0][1];
  for (let i = 1; i < this.footprint.length; i++) {
    if (xMax < this.footprint[i][0]) {
      xMax = this.footprint[i][0]
    }
    if (yMax < this.footprint[i][1]){
      yMax = this.footprint[i][1]
    } 
    if (xMin > this.footprint[i][0]) {
      xMin = this.footprint[i][0]
    }
    if (yMin > this.footprint[i][1]){
      yMin = this.footprint[i][1]
    } 
  } 

  const blank = [];
  for (let i = yMax; i >= yMin; i--) {
     for (let j = xMin; j <= xMax; j++){
       blank.push([j, i])
  }
}

  let allPath = "";
    for (let bla of blank) {
      allPath += "⬜️";
      for (let elem of this.footprint) {
        if (bla[0] === elem[0] && bla[1] === elem[1]){
          allPath = allPath.slice(0, allPath.length -2)
          allPath += "🟪";
          }
        }
        if (bla[0] === xMax) {
          allPath += "\n"
        } 
    }
    return allPath;
};

}


const flash =  new Turtle(0, 4)
.forward(3)
.left()
.forward(3)
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.print();

console.log(flash);


