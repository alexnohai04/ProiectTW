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
  
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = this.getAttribute("href").slice(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var offset = targetElement.offsetTop - 150;
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      }
    });
  }
});

