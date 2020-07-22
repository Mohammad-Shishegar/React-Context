import React, { Component } from "react"
import LanguegeContext from "./contexts/LanguageContext"
import ColorContext from "./contexts/ColorContex"

class Button extends Component {

    // static contextType = LanguegeContext

    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguegeContext.Consumer>
                    {(value) => value === "english" ? "Submit" : "Voorleggen"}
                </LanguegeContext.Consumer>
            </button>
        )
    }

    render() {
        // const text = this.context === "english" ? "Submit" : "Vootlegen"
        return (
            // <button className = "ui button primary">{text}</button>
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}
export default Button