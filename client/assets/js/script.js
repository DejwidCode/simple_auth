const forms = document.querySelectorAll("form")

for(form of forms) {
    form.addEventListener("submit", handle.bind(form))
}


function handle(e)
{
    if(this.id == "formLogin")
    {

    }

    else if(this.id == "registerForm") {
        
    }
    e.preventDefault()
}
