const formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

form.addEventListener('input', event => {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    }
    if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    emailInput.value = "";
    messageInput.value = "";
});
