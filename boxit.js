let str1 = process.argv[2];
let str2 = process.argv[3];
let str3 = process.argv[4];
const max = maxWidth(process.argv.slice(2))

// 1. Draw Line

// let line = String.fromCodePoint(0x2500);
let line = '\u{2500}'
function drawLine (num) {
  return line.repeat(num);
}


// 2. Draw Top Border
let leftT = '\u{250C}'
let rightT = '\u{2510}'
function drawTopBorder (num) {
  return leftT + drawLine(num) + rightT;
}



// 3. Draw Middle Border
let leftM = '\u{251C}'
let rightM = '\u{2524}'
function drawMiddleBorder (num) {
  return leftM + drawLine(num) + rightM;
}


// 4. Draw Bottom Border
let leftB = '\u{2514}'
let rightB = '\u{2518}'
function drawBottomBorder (num) {
  return leftB + drawLine(num) + rightB;
}


// 5. Draw Bars Around
let bar = '\u{2502}'
function drawBarsAround (string) {
  return bar + string + ' '.repeat(max- string.length) + bar;
}

// console.log(typeof maxWidth((process.argv).slice(2)),"////");



// 6. Box It Function


function maxWidth (arr) {
  let width = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].length > width) {
      width = arr[index].length;
    }
  } 
  return width;
}
// console.log(maxWidth(['Jon Snow', 'Dabin Chae', 'yuko']));




function boxIt (arr) {
  let result = ""
  let first = ""
  if (arr.length == 0) {
    result = drawTopBorder(1) + '\n'.repeat(2) + drawBottomBorder(1);
  } else{
    for (let i = 0; i < arr.length; i++) {
      first = drawTopBorder(maxWidth(arr)) + '\n' + drawBarsAround(arr[0]);
      let middleBox = ""
      if (arr.length > 1) {
        for (let j = 1; j <= arr.length -1; j++) {
          middleBox += '\n' + drawMiddleBorder(maxWidth(arr)) + '\n' + drawBarsAround (arr[j]);
        }
        result = first  + middleBox + '\n' + drawBottomBorder(maxWidth(arr));
      } else {
        result = first + '\n' + drawBottomBorder (maxWidth(arr));
      } 
    }
  
  }

  return result;
  

  }


console.log(boxIt(process.argv.slice(2)));