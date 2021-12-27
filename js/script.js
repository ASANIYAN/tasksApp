let signedUser = document.querySelector('#signed-user');
let signedUser_small = document.querySelector('#signed-user_small');

JSON.parse(localStorage.getItem('users')).forEach(data => {
    if (data.session == true) {
        signedUser.innerText = data.user_email;
        signedUser_small.innerText =  data.user_email;
    }
});

let dash_icon_head = document.querySelector('#dash_icon_head');
let sign_in_hold = document.querySelector('#sign_in_hold');
let body = document.querySelector('body');
body.addEventListener('click', function (e) {
    if (!e.target.closest("#sign_in_hold") && e.target.id !== 'dash_icon_head') {
        sign_in_hold.classList.remove('visibility');
    }
});
dash_icon_head.addEventListener('click', function (e) {
    e.preventDefault();
    sign_in_hold.classList.toggle('visibility');
});