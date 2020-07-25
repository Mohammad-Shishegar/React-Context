import React , {createContext , Component} from "react"

export const ThemeContext = createContext()

export class ThemeProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            isDarkMode : false
        }
        // this.toggleTheme = this.toggleTheme.bind(this)
    }

    render(){

        const toggleTheme = () => {
            this.setState({
                isDarkMode : !this.state.isDarkMode
            })
        }

        return(
            <ThemeContext.Provider value = {{...this.state , toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}