// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(gifts, event){
    const newList = []
    for(var i = 0;i< gifts.length; i++){
        var mes = `thank you for the ${event} gift of ${gifts[i]}!`
        newList.unshift(mes);
        console.log(newList)
    }
}
console.log(writeCards(gifts, "Birthday"))

function countDown(int){
    while(int>=0){
        console.log(int);
        int = int - 1;
    }
}

console.log(countDown(10))