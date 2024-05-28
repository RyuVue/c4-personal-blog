document.addEventListner('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorMessage = document.getElementById('error-message');

    if (!username || !title || !content) {
        errorMessage.textContent = 'Complete form'
        errorMessage.style.visiblity = 'visible';
        return
    }
    errorMessage.style.visiblity = 'hidden'
})