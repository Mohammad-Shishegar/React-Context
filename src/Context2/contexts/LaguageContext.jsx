import React ,{Component , createContext} from "react"

export const LaguageContext = createContext()

export class LanguageProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            language : "english"
        }
        this.chgangeLanguage = this.chgangeLanguage.bind(this)
    }

    chgangeLanguage (e) {
        this.setState({
            language : e.target.value
        })
    }

    render(){
        return(
            <LaguageContext.Provider value = {{...this.state , chgangeLanguage : this.chgangeLanguage}}>
                {this.props.children}
            </LaguageContext.Provider>
        )
    }
}