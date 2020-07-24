import React, { Component } from "react"
import NavBar from "./NavBar"
import Form from "./Form"
import PageContent from "./PageContent"
import { ThemeProvider } from "./contexts/ThemeContect"
import { LanguageProvider } from "./contexts/LaguageContext"

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <LanguageProvider>
                    <PageContent>
                        <NavBar />
                        <Form />
                    </PageContent>
                </LanguageProvider>
            </ThemeProvider>
        )
    }
}
export default App