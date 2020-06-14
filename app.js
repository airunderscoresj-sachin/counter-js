// setting the initial value of the count
let count = 0;
// selecting value and the buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
 btn.addEventListener('click', function (e) {
  const styles = e.currentTarget.classList;
  if (styles.contains('decrease')) {
   count--;
  } else if (styles.contains('increase')) {
   count++;
  } else {
   count = 0;
  }
  if (count > 0) {
   value.style.color = 'green';
  } else if (count < 0) {
   value.style.color = 'red';
  } else {
   value.style.color = '#222';
  }
  value.textContent = count;


 })
});

// todo basically 1. in the line 1 we, setup the initial count to be 0 ; secondly, we selected the value and the buttons all the buttons then we have got a nose list object and foreach method we ran their to loop over each and every button and adding the event listner as we r looping over that buttons adding the event listener to each and every button after that for functionslity what to so we hv detup a callback function with a parameter e and then else if statements are used dont ever forget the ; at the end of the statements now, in line 24 we, replaced text content with the count we have that's it of the project