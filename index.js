// Code your solutions in this file
// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
// }
// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i=0; i<gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);
// const cards = ["Guadalupe", "Ollie", "Aki"];
// function writeCards(cards) {
//     for (let i=0; i<cards.length; i++){
//         console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
//     }
//     return cards;
// }
function writeCards(namesArray, eventName) {
    const messages =[];
    for (let i=0; i<namesArray.length; i++){
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }
    return messages;
}
const names =['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

const messages = writeCards(names, event);
console.log(messages);
function countDown(num) {
    for (let i=num;i>= 0; i--) {
        console.log(i);
    }
}