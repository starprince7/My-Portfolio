/* const collect_form_Data = (event) => {
    event.preventDefault()
    console.log
    alert()
} */

const form = document.getElementById("contact__form");
const loader = document.querySelector(".loader");
const modal_back = document.querySelector(".modal__background");
const Modal = document.querySelector("#modal");
const close_modal = document.getElementById("close-btn");
const intro_loader = document.querySelector('.intro__loader')

window.addEventListener('load', () => {
  intro_loader.style.display = 'none'
})

close_modal.addEventListener("click", () => {
  modal_back.style.display = "none";
  Modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "block";
  const name = form.name.value;
  const email = form.email.value;
  console.log(name, email);

  fetch("/clients", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((result) => {
      result
        .json()
        .then((data) => {
          loader.style.display = "none";
          form.name.value = "";
          form.email.value = "";
          console.log("Response from the backend :", data);
          if (data.msg) {
            modal_back.style.display = "block";
            Modal.style.display = "block";
          }

          if (data.error) {
            alert(data.error)
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
});
