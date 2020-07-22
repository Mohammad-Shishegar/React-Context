import React, { Component } from "react"
import UserCreate from "./UserCreate"
import ColorContext from "./contexts/ColorContex"
import LanguegeContext from "./contexts/LanguageContext"

class App extends Component {

    state = { language: "english" }

    onLanguageChange = (language) => {
        this.setState({
            language
        })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => { this.onLanguageChange("english") }} />
                    <i className="flag nl" onClick={() => { this.onLanguageChange("dutch") }} />
                </div>
                <ColorContext.Provider value ={this.state.language === "english" ? "red" : "primary"}>
                    <LanguegeContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguegeContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App