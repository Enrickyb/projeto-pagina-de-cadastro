
const validation = document.getElementById('submit')

validation.addEventListener("click", valid)

    function valid() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if(email == 'enrickyb@hotmail.com' && password == '1234'){
            alert('Login sucessful')
            return false
        }else{
            alert('Login faild')
        }
        
    }
