const form = document.getElementById('roflForm');
const status = document.getElementById('status');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const submission = new Submission({
        nick: form.elements.nick.value,
        email: form.elements.email.value,
        text: form.elements.text.value,
        agree: form.elements.agree.checked,
    });
    submission.print();

    form.reset();
});
