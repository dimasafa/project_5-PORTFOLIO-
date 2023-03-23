function formsPost() {
    const forms = document.querySelectorAll('form');
    const resetForm = document.getElementById('reset');
    
    const message = {
        loading: 'loading...',
        success: 'alles ok!',
        failure: 'Etwas schief gegangen'
    };
    
    forms.forEach(item => {
        bindPostData(item);
    });
    
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }
    
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.appendChild(statusMessage);
    
            const formData = new FormData(form);
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                statusMessage.textContent = message.success;
                statusMessage.remove();
            }).catch (() => {
                statusMessage.textContent = message.failure;
            }).finally (() => {
                form.reset();
            });
        });
    }
    
    resetForm.addEventListener('click', () => {
        const inputAll = document.querySelectorAll('.forma__wrapper__mainForma__forma input');
        for (let i = 0; i < inputAll.length; i++) {
            if (inputAll[i].type == "name" || inputAll[i].type == "email" || inputAll[i].type == "text") {
                inputAll[i].value = "";
            }
        }
    });
}

export default formsPost;
