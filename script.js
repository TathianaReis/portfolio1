function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

const menu = document.querySelectorAll('.nav-links li');
const pageCover = document.querySelector('.page-cover');
const pageCoverMiddle = document.querySelector('.cover-effect-middle');
const pageCoverLast = document.querySelector('.cover-effect-last');

menu.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    // Step 1: Slide in the page-cover from left to right
    pageCover.style.transform = 'translateX(0)';
    console.log('Sliding in page-cover');

    // Step 2: Wait for the page-cover animation to complete
    setTimeout(() => {
      console.log('Sliding back page-cover');
      pageCover.style.transform = 'translateX(-100%)';

      // Slide middle and last divs
      setTimeout(() => {
        console.log('Sliding back cover-effect-middle');
        pageCoverMiddle.style.transform = 'translateX(-100%)';
      }, 100); // Delay to create a smooth stagger effect

      setTimeout(() => {
        console.log('Sliding back cover-effect-last');
        pageCoverLast.style.transform = 'translateX(-100%)';
      }, 200); // Delay to create a smooth stagger effect

      // Step 3: Reset transform after animation ends (invisible reset)
      setTimeout(() => {
        console.log('Resetting positions off-screen');
        pageCoverMiddle.style.transition = 'none'; // Temporarily disable animation
        pageCoverLast.style.transition = 'none';

        // Reset positions off-screen
        pageCoverMiddle.style.transform = 'translateX(100%)';
        pageCoverLast.style.transform = 'translateX(100%)';

        // Re-enable animations
        setTimeout(() => {
          pageCoverMiddle.style.transition = 'transform 0.8s ease-in-out';
          pageCoverLast.style.transition = 'transform 0.8s ease-in-out';
          console.log('Reset complete');
        }, 50); // Small delay to ensure reset
      }, 1000); // Match the animation duration
    }, 800); // Match the CSS transition duration
  });
});
