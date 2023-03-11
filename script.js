
const divContent = document.getElementById("content")

class Calculator {
    #container
    #visor

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

    #createVisor() {
        const visor = document.createElement("input")
        visor.setAttribute("type", "text")
        visor.setAttribute("readonly", "readonly")
        visor.setAttribute("id", "visor")

        return visor
    }

    #createKeypad(visor) {
        const buttonContainer = document.createElement("div")
        buttonContainer.setAttribute("id", "keypad")
        const operators = "/*+-";
        const buttons = [
            {text:"RESET", action: (e, visor) => visor.value = "", style: "rowSpan red"} ,
            {text: "C" , action: (e, visor) => visor.value = visor.value.slice(0, -1)},
            {text: "/" , action: (e, visor) => {
                    !operators.includes(visor.value.slice(-1)) ? visor.value += e.target.innerHTML : {}}},

            {text: "7" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "8" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "9" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "*" , action: (e, visor) => {
                    !operators.includes(visor.value.slice(-1)) ? visor.value += e.target.innerHTML : {}}},

            {text: "4" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "5" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "6" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "-" , action: (e, visor) => {
                    !operators.includes(visor.value.slice(-1)) ? visor.value += e.target.innerHTML : {}}},

            {text: "1" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "2" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "3" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "+" , action: (e, visor) => {
                    !operators.includes(visor.value.slice(-1)) ? visor.value += e.target.innerHTML : {}}},

            {text: "." , action: (e, visor) => {
                    !operators.includes(visor.value.slice(-1)) ? visor.value += e.target.innerHTML : {}}},
            {text: "0" , action: (e, visor) => visor.value += e.target.innerHTML},
            {text: "=" , action: (e, visor) => {
                    visor.value = eval(visor.value)
                },
                style: "rowSpan blue"}
        ]

        buttons.forEach((button) => {
            const htmlBtn = document.createElement("button")
            htmlBtn.innerHTML = button.text
            htmlBtn.className = button.style ?  button.style : ""
            htmlBtn.addEventListener("click", function (e) { button.action(e,visor)}  )

            buttonContainer.appendChild(htmlBtn)
        } )


        return buttonContainer
    }

    render () {
        this.#container.appendChild(this.#createTitle())
        const visor = this.#createVisor()

        this.#container.appendChild(visor)
        this.#container.appendChild(this.#createKeypad(visor))

    }
}


new Calculator(divContent).render()