let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let count = 0;

let btn_signup = document.querySelector('#btnsignup');
btn_signup.addEventListener('click', function (e) {
    ++count;
    if (String(email.value) !== '' && String(pass.value) !== '') {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (!users.length) {

        } else {
            users.forEach(data => {
                if (data.id == count) {
                    ++count;
                }
            });
        }
        users.push({
            id: count,
            user_email: email.value,
            user_pass: pass.value,
            session: true,
            collections: []
        });
        localStorage.setItem('users', JSON.stringify(users));
        location.href = 'dashboard.html';

    } else {
        alert('Username or Password is invalid');
    }
});