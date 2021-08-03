const navToggle = document.getElementById('navbar-toggle');
const navigation = document.querySelector('.navbar__elements');

navToggle.addEventListener('click', () => {
  navigation.classList.toggle('show');
})