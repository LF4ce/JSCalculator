
const divContent = document.getElementById("content")

class Calculator {
    #container
   
    constructor(divContent) {
        this.#container = divContent
    }

    #createTitle() {
        const title = document.createElement("span")
        title.innerHTML = "JS Calculator"

        const titleContainer = document.createElement("div")
        titleContainer.setAttribute("id", "title")
        titleContainer.appendChild(title)

        return titleContainer
    }

    #createDisplay() {
        const display = document.createElement("input")
        display.setAttribute("type", "text")
        display.setAttribute("readonly", "readonly")
        display.setAttribute("id", "display")

        return display
    }

    #createKeypad(display) {
        const buttonContainer = document.createElement("div")
        buttonContainer.setAttribute("id", "keypad")
        const operators = "./*+-";
        const appendValue = (e, display) => {
            if(display.value.includes(" ")) display.value = ""
            display.value += e.target.innerHTML
        }
        const appendWithValidation = (e, display) => {!operators.includes(display.value.slice(-1)) ? display.value += e.target.innerHTML : {}}

        const buttons = [
            {text:"RESET", action: (e, display) => display.value = "", style: "colSpan red"} ,
            {text: "C" , action: (e, display) => display.value = display.value.slice(0, -1)},
            {text: "/" , action: appendWithValidation},

            {text: "7" , action: appendValue},
            {text: "8" , action: appendValue},
            {text: "9" , action: appendValue},
            {text: "*" , action: appendWithValidation},

            {text: "4" , action: appendValue},
            {text: "5" , action: appendValue},
            {text: "6" , action: appendValue},
            {text: "-" , action: appendWithValidation},

            {text: "1" , action: appendValue},
            {text: "2" , action: appendValue},
            {text: "3" , action: appendValue},
            {text: "+" , action: appendWithValidation},

            {text: "." , action: appendWithValidation},
            {text: "0" , action: appendValue},
            {text: "=" , action: (e, display) => display.value = ` ${eval(display.value)}`, style: "colSpan blue"}
        ]

        buttons.forEach((button) => {
            const htmlBtn = document.createElement("button")
            htmlBtn.innerHTML = button.text
            htmlBtn.className = button.style ?  button.style : ""
            htmlBtn.addEventListener("click", function (e) { button.action(e,display)}  )

            buttonContainer.appendChild(htmlBtn)
        } )

        return buttonContainer
    }

    render () {
        this.#container.appendChild(this.#createTitle())
        const display = this.#createDisplay()

        this.#container.appendChild(display)
        this.#container.appendChild(this.#createKeypad(display))

    }
}


new Calculator(divContent).render()