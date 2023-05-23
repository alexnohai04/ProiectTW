// Așteaptă până când documentul HTML este complet încărcat
document.addEventListener("DOMContentLoaded", function() {
  // Obține elementul de logo
  var logo = document.querySelector(".logo");

  // Funcția care gestionează acțiunea de click pe logo
  function handleLogoClick() {
    // Navighează utilizatorul în partea de sus a paginii
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Adaugă un listener de eveniment pentru evenimentul de click pe logo
  logo.addEventListener("click", handleLogoClick);
});


function scrollToElementWithOffset(elementId) {
    const targetElement = document.getElementById(elementId);
  
    if (targetElement) {
      const offset = targetElement.offsetTop - 150;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substr(1);
        scrollToElementWithOffset(targetId);
      });
    });
  });
  