const form = document.querySelector('form');

const persons = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('input_name');
    let mail = document.getElementById('input_mail');

    let person = {
        name: name.value,
        mail: mail.value
    }

    person.push(persons);

    console.log(persons);
});