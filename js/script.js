var link = document.querySelector(".popup");
      var overlay = document.querySelector(".modal-overlay");
      var modal = document.querySelector(".modal");
      var close = modal.querySelector(".close");
      var login = modal.querySelector("[name=name-feedback]");
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("visible");
        modal.classList.add("visible");
        login.focus();
      });
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.remove("visible");
        modal.classList.remove("visible");
      });