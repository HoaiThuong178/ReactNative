// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// -----------------------------------------------------------------------------

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.again').addEventListener('click', function() {
  // Khôi phục giá trị ban đầu của các biến
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Khôi phục trạng thái ban đầu của các phần tử DOM
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Khôi phục màu nền và chiều rộng
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

