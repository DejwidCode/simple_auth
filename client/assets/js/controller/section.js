class ContentController {
    constructor() {
        this.contents = []
        this.current = null
    }

    addContent(content) {
        if(content)
        {
            console.log(`Created new content ${content.getName()}`);
            this.contents.push(content)
        }
    }

    setContent(name) {
        if(name != null)
        {
            if(this.current)
            {
                this.current.hide()
                this.current=null
            }
            console.log(`Switch to ${name}`);
            const index = this.contents.findIndex(e=>e.getName()==name)
            if(index>-1)
            {
                this.contents[index].show()
                this.current = this.contents[index] 
            }
        }
    }
}

class Content {
    constructor(controller, name, sectionID) {
        if(controller && name != null && sectionID)
        {
            this.name = name
            this.sectionID = document.getElementById(sectionID)
            controller.addContent(this)
        }
    }

    getName(){
        return this.name
    }

    show()
    {
        this.sectionID.classList.add('active')
    }

    hide()
    {
        this.sectionID.classList.remove('active')
    }
}

const myContentController = new ContentController()

new Content(myContentController, "login", "loginContent") // Login
new Content(myContentController, "register", "registerContent") // Register

window.addEventListener("load", ()=>{

    let link = window.location.hash
    link = link.slice(1) // Remove # from hash
    if(link == "")
    {
        myContentController.setContent('login')
    }
    else
    {
        myContentController.setContent(link)
    }

})