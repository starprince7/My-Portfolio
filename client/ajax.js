/* const collect_form_Data = (event) => {
    event.preventDefault()
    console.log
    alert()
} */

const form = document.getElementById("contact__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
          console.log("Response from the backend :", data);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
});
