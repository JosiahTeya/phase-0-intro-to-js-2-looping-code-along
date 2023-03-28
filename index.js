
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