import refs from './refs.js';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  myTimer() {
    setInterval(() => {
      firstSecs();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('jan 1 2021'),
});

firstSecs();
timer.myTimer();

function firstSecs() {
  let timeBetween = timer.targetDate.getTime() - Date.now();

  refs.days.textContent = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  refs.hours.textContent = Math.floor(
    (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  refs.minutes.textContent = Math.floor(
    (timeBetween % (1000 * 60 * 60)) / (1000 * 60),
  );
  refs.seconds.textContent = Math.floor((timeBetween % (1000 * 60)) / 1000);
}
