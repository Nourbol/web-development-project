$(document).ready(function() {

    let currentImgInd = 0, lastImgInd = $(".item").length - 1;

    $(".right").click(function() {
      if (currentImgInd == lastImgInd) {
        currentImgInd = -1;
      }
      $(".item.active")[0].classList.remove("active");
      $(".item")[++currentImgInd].classList.add("active");
    });

    $(".left").click(function() {
      if (currentImgInd == 0) {
        currentImgInd = lastImgInd + 1;
      }
      $(".item.active")[0].classList.remove("active");
      $(".item")[--currentImgInd].classList.add("active");
    });


    let contactButton = document.getElementById('contact-button');
    let inputArray = document.getElementsByClassName('form-control');

    contactButton.addEventListener('click', function(event) {
      let count = inputArray.length;
      for (let i = 0; i < $('.form-control').length; i++) {
        let input = inputArray[i].value;
        if (input.length == 0) {
          inputArray[i].style.borderColor = "red";
          count--;
        } else {
          inputArray[i].style.borderColor = "#66afe9";
        }
      }

      if (count == $('.form-control').length) {
        let alert = document.createElement("div");
        alert.classList.add("alert");
        alert.classList.add("alert-info");
        alert.setAttribute("role", "alert");
        alert.setAttribute("style", "position: fixed; bottom: 0; right: 0; background-color: #2d2d30; color: #fff; border-color: #2d2d30; transition: opacity 1s ease-in-out;")
        alert.innerText = "Your contacts were sent!";
        document.body.appendChild(alert);
        $(".alert-info").fadeOut(3500);
        for (let i = 0; i < inputArray.length; i++) {
          inputArray[i].value = "";
        }
      }

      let scrollButton = document.getElementsByClassName("up-arrow");
      scrollButton[0].addEventListener("click", function() {
        document.body.scrollIntoView({
          behavior: "smooth",
        });
      });
    });



    



    // contactButton.addEventListener("click", function(event) {
    //   let div = document.createElement('div');
    //   div.className = 'loader-wrapper';
    //   let fSpan = document.createElement('span');
    //   fSpan.className = 'loader';
    //   let sSpan = document.createElement('span');
    //   sSpan.className = 'loader-inner'

    //   let style = document.createElement('style');
    //   style.innerHTML = '.loader-inner { vertical-align: top; display: inline-block; width: 100%; background-color: #fff; animation: loader-inner 2s infinite ease-in;} ' +
    //   '.loader { display: inline-block; width: 30px; height: 30px; position: relative; border: 4px solid #fff; top: 50%; animation: loader 2s infinite ease; } ' +
    //   '.loader-wrapper { width: 100%; height: 100%; position: absolute; top: 0; left: 0; background-color: #242f3f; display: flex; justify-content: center; align-items: center; } ';
    //   document.body.appendChild(style);

    //   $('#contact-form').classList.remove('col-md-8').classList.add('loader-wrapper')
    //   $('#contact-form').html('');

    //   div.appendChild(fSpan);
    //   fSpan.appendChild(sSpan);

    //   contactForm.appendChild(div);

    //   console.log("lol");
    // });
    

  });


// function preventAction(event) {
//     if (event.cancelable) {
//         event.preventDefault();
//     } else {
//         console.warn("Cannot be prevented")
//     }
// };

// function createToast() {
      //   let container = document.createElement("div");
      //   container.setAttribute("aria-live", "polite");
      //   container.setAttribute("aria-atomic", "true");
      //   container.setAttribute("style", "position: relative; min-height: 200px;");
      //   let toast = document.createElement("div");
      //   toast.setAttribute("role", "alert");
      //   toast.setAttribute("aria-live", "assertive");
      //   toast.setAttribute("aria-atomic", "true");
      //   toast.setAttribute("style", "position: absolute; bottom: 0; right: 0;")
      //   toast.classList.add("toast");
      //   let header = document.createElement("div");
      //   header.classList.add("toast-header");
      //   let button = document.createElement("button");
      //   button.setAttribute("type", "button");
      //   button.setAttribute("data-dismiss", "toast");
      //   button.setAttribute("aria-label", "Close");
      //   button.classList.add("ml-2");
      //   button.classList.add("mb-1");
      //   button.classList.add("close");
      //   let span = document.createElement("span");
      //   span.setAttribute("aria-hidden", "true");
      //   span.innerText ="&times;"
      //   button.appendChild(span);
      //   header.appendChild(button);
      //   toast.appendChild(header);
      //   let body = document.createElement("div");
      //   body.classList.add("toast-body");
      //   body.innerText = "Your contacts were sent!";
      //   toast.appendChild(body);
      //   container.appendChild(toast);
      //   document.body.appendChild(container);
      // }