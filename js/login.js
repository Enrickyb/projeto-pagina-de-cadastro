const email = document.getElementById('email')
const password = document.getElementById('password')
const validation = document.getElementById('submit')

validation.addEventListener("click", valid)

    function valid() {
        if(email == 'enrickyb@hotmail.com' && password == '1234'){
            alert('Login sucessful')
            return false
        }else{
            alert('Login faild')
        }
        
    }
