import React, { Component } from "react"
import {ThemeContext} from "./contexts/ThemeContect"

class PageContent extends Component {
    static contextType = ThemeContext
    render() {
        const {isDarkMode} = this.context
        const style = {
            backgroundColor : isDarkMode ? "black" : "white",
            height : "100vh",
            width : "100vw"
        }
        return (
            <div style ={style}>{this.props.children}</div>
        )
    }
}

export default PageContent