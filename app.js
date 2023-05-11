//1
const user = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];

  
function findSmallestAge(users) {
  let smallestAge = users[0].age; 

  for (let i = 0; i < users.length; i++) {

    if (users[i].age < smallestAge) {
      smallestAge = users[i].age;
    }
  }
  return smallestAge;
}



//2
const oldObject = {
    name:'gela',
    lastaname: 'gnolidze',
}
function createNew(user){
  const newObject = {...user}
  return newObject

}
console.log(createNew(oldObject))


//3

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceChallenge() {
  let aTries = 0;
  let bTries = 0;

  while (true) {
    let aRoll = rollDice();
    let bRoll = rollDice();

    aTries++;
    bTries++;

    console.log("A rolled:", aRoll);
    console.log("B rolled:", bRoll);


      if (aRoll === 3 && bRoll !== 3) {
        console.log("A is the winner!");
        return "A";
      } else if (aRoll !== 3 && bRoll === 3) {
        console.log("B is the winner!");
        return "B";
      }else if(aRoll !== 3 && bRoll !== 3){
        console.log('Try again!')
        return 'none'
      }
       else {
        console.log("It's a tie!");
        return "Tie";
      }
    }
  }




diceChallenge()