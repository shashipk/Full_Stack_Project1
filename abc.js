const dropdownButton = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

if (dropdownButton && dropdown) {
  dropdown.addEventListener('mouseenter', () => dropdownButton.setAttribute('aria-expanded', 'true'));
  dropdown.addEventListener('mouseleave', () => dropdownButton.setAttribute('aria-expanded', 'false'));
  dropdown.addEventListener('focusin', () => dropdownButton.setAttribute('aria-expanded', 'true'));
  dropdown.addEventListener('focusout', () => dropdownButton.setAttribute('aria-expanded', 'false'));
}
