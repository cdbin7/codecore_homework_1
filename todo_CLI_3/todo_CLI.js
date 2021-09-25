
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:">"
})

let listArray= [];
let a = false;
const menu = `\n(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit`;


console.log(`Welcome to Todo CLI!

--------------------

(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit`);
rl.prompt();
rl.on("line", (answer) => {
  splitAnswer = answer.split('')

if (a == true) {
  listArray.push({task:answer,isComplete:false, delete:false});
  console.log(menu);
  rl.prompt();
  a = false;
} else {
  if(answer == 'v') {
    viewFunc();
  }else if(answer == 'n'){
    newFunc();
  } else if (answer == 'q'){
    quitFunc();
  } else if (splitAnswer[0] == 'c'){
    completeFunc();
  } else if (splitAnswer[0] == 'd') {
    deleteFunc();
  }
}
})


function viewFunc () {
  if(listArray.length === 0) {
    console.log(`List is empty...`, menu);
  } else {
    for(let i = 0; i < listArray.length; i++) {
      if (listArray[i].isComplete == true){
        console.log(`${i} [✓] ${listArray[i].task}`)
      } else {
        console.log(`${i} [] ${listArray[i].task}`)
      }
    }
    console.log(menu)
  }
}

function newFunc() {
  a = true;
  console.log(`What?`)
  rl.prompt()
}

function completeFunc() {
  listArray[splitAnswer[1]].isComplete = true;
  console.log(`Completed "${listArray[splitAnswer[1]].task}"`)
  console.log(menu)
}

function deleteFunc() {
  listArray[splitAnswer[1]].delete = true;
  console.log(`Deleted "${listArray.splice(splitAnswer[1], 1)[0].task}"`);
  console.log(menu)
}


function quitFunc() {
  console.log('See you soon!😄')
  rl.close();
}
