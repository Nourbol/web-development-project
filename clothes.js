$(document).ready(function () {
  $(".btn").click(function () {
    $("#myModal").fadeTo(400, 1);
  });

  $("#closeModal").click(function () {
    $(".modal").fadeOut("slow");
  });

  let audio = new Audio("cashier.mp3");
  let inputArray = document.getElementsByClassName("form-control");

  $("#payButton").click(function (event) {
    event.preventDefault();
    let count = inputArray.length;
    for (let i = 0; i < inputArray.length; i++) {
      let input = inputArray[i].value;
      if (input.length == 0) {
        inputArray[i].style.borderColor = "red";
        count--;
      } else {
        inputArray[i].style.borderColor = "#66afe9";
      }
    }

    if (count >= inputArray.length) {
      audio.play();
      $(".modal").fadeOut("slow");
    }
  });

  $(".navbar a, footer a[href='#myClothes']").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
