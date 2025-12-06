// Basic prompt on any button click
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      prompt('Button clicked. Enter anything:');
    });
  });
});