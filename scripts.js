/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Détection du support
//  if(typeof sessionStorage!='undefined') {
//     if('message' in sessionStorage) {
//       alert("Message récupéré");
//       document.getElementById('nom1').value = sessionStorage.getItem('nom1');
//     }
//   } else {
//     alert("sessionStorage n'est pas supporté");
//   }
//   if(typeof sessionStorage!='undefined') {
//     if('message' in sessionStorage) {
//       alert("Message récupéré");
//       document.getElementById('nom2').value = sessionStorage.getItem('nom2');
//     }
//   } else {
//     alert("sessionStorage n'est pas supporté");
//   }
//   console.log('nom1');
//   console.log('nom2');

// tableauJoueur[0];


var k = "Joueur 1 :";
var z = "Joueur 2 : ";

function RecupNom() {
    var input = document.getElementsByName('nom');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + a.value;
    }

    document.getElementById("par").innerHTML = k;
    document.getElementById("po").innerHTML = "Output";
}

$(document).ready(function () {
    $(".msg").not(".yellow.msg").hide();
    $(".yellow.msg").show();
    $('input[type="radio"]').click(function () {
      var val = $(this).attr("value");
      var target = $("." + val);
      $(".msg").not(target).hide();
      $(target).show();
    });

    let t = $('input[type="radio"]:checked').id;

    console.info("Ici resultat input");
    console.log(t);

    let y = document.querySelectorAll("input[name='joueur1']");
    console.log(y);

    
  });


