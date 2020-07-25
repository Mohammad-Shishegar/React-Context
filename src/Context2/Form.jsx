import React, { Component } from "react"
import {
    withStyles, Paper, Avatar, Typography, MenuItem, Select, FormControl, InputLabel
    , Input, FormControlLabel, Button , Checkbox} from "@material-ui/core"
import styles from "./styles/FormStyle"
import { LockOutlined } from "@material-ui/icons"
import {LaguageContext} from "./contexts/LaguageContext"

const word = {
    english : {
        email : "Email",
        password : "Password",
        rememberme: "Remember me",
        signIn : "sign in"
    },  
    french : {
        email : "Adresse Electronique",
        password : "Mot de Passe",
        rememberme: "Soviens-toi De Moi",
        signIn : "Se Connecter"
    },
    spanish : {
        email : "Correo Electeronico",
        password : "Contrasena",
        rememberme: "Recuerdame",
        signIn : "Registrarse"
    }
}

class Form extends Component {
    static contextType = LaguageContext
    render() {
        const { classes } = this.props
        const {language , chgangeLanguage} = this.context
        const laguage = word[language]
        return (
            <main className={classes.main}>
                <Paper className={classes.paper} >
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Sign In</Typography>
                    <Select  value = {language} onChange = {chgangeLanguage}>
                        <MenuItem value = "english">English</MenuItem>
                        <MenuItem value = "french">French</MenuItem>
                        <MenuItem value = "spanish">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Email">{laguage.email}</InputLabel>
                            <Input id="Email" name="Email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">{laguage.password}</InputLabel>
                            <Input id="password" name="password" autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label={laguage.rememberme}
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            color="primary"
                            className={classes.submit}
                        >
                            {laguage.signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}
export default withStyles(styles)(Form)