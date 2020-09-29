(function ($) {

  $(document).ready(function () {

    //if body id is equal to blusher place background color
    const blusherBodyID = document.getElementById('blusher');
    const brushesBodyID = document.getElementById('brushes');
    const mascaraBodyID = document.getElementById('mascara');
    const indexBodyID = document.getElementById('index');
    const hairBodyID = document.getElementById('hair');
    const perfumeBodyID = document.getElementById('perfume');


    if (blusherBodyID) {
      blusherBodyID.style.backgroundImage = 'url(../assets/img/Image-02.jpg)';
    } else if (mascaraBodyID) {
      mascaraBodyID.style.backgroundImage = 'url(../assets/img/Image-04.jpg)';
    } else if (hairBodyID) {
      hairBodyID.style.backgroundImage = 'url(../assets/img/Image-06.jpg)';
    } else if (perfumeBodyID) {
      perfumeBodyID.style.backgroundImage = 'url(../assets/img/Image-05.jpg)';
    } else if (brushesBodyID) {
      brushesBodyID.style.backgroundImage = 'url(../assets/img/Image-03.jpg)';
    } else {
      indexBodyID.style.backgroundImage = 'url(../assets/img/Image-01.jpg)';
    }



  });
})(jQuery); // End of use strict
