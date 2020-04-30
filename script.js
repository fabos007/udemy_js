let incr = 10,
decr = 10;


console.log(++incr);
console.log(--decr);

const addEvent = document.querySelectorAll('div');
function newEvent() {
  addEvent.addEventListener('click');
}
newEvent();