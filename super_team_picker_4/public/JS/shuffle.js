function shuffle(list){
  for(let i = 0; i < list.length; i++){
    const randomNum = Math.floor((Math.random() * list.length))
    const temp = list[randomNum]
    list[randomNum] = list[i]
    list[i] = temp
  }
}

function teamCount(quantity, names) {
  shuffle(names)
  //make empty array of n empty subarray
  let nameList = []
  for(let i = 0; i < quantity; i++){
    nameList.push([])
  }
  //loop through all names and add name one by one into each subarray
  let index = 0
  for(let i = 0; i < names.length; i++){
    if(index === quantity){
      index = 0
    }
    nameList[index].push(names[i])
    index++
  }
  return nameList
}



//inputs: quantity = num per team
// 2nd input: name list
//output: quantity number of people in teams in a list array
function numPerTeam (quantity, names){
  shuffle(names)
  let nameList = []
  let subArray = []
  for (let i = 0; i < names.length; i++){
    if(i == names.length -1){
      nameList.push(subArray)
    }

    if(subArray.length == quantity){
      nameList.push(subArray)
      subArray = []
    }
    subArray.push(names[i])
  }
  return nameList
}


//inputs: quantity = num per team
// 2nd input: name list
//output: quantity number of people in teams in a list array


module.exports = {
  teamCount: teamCount,
  numPerTeam: numPerTeam
}