import React, {Component} from "react"
import LanguegeContext from "./contexts/LanguageContext"

class Fild extends Component{

    static contextType = LanguegeContext

    render(){
        const text = this.context === "english" ? "Name" : "Naam"
        return(
            <div className = "ui fild">
                <label>{text}</label>
                <input/>
            </div>
        )
    }
}

export default Fild