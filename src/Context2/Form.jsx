import React, { Component } from "react"
import {
    withStyles, Paper, Avatar, Typography, MenuItem, Select, FormControl, InputLabel
    , Input, FormControlLabel, Button , Checkbox} from "@material-ui/core"
import styles from "./styles/FormStyle"
import { LockOutlined } from "@material-ui/icons"
import {LaguageContext} from "./contexts/LaguageContext"

const word = {
    english : {
        email : "Email"
    },
    french : {
        email : "Adresse Electronique"
    },
    spanish : {
        email : "Correo Electeronico"
    }
}

class Form extends Component {
    static contextType = LaguageContext
    render() {
        const { classes } = this.props
        const {language , chgangeLanguage} = this.context
        const {email} = word[language]
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
                            <InputLabel htmlFor="Email">{email}</InputLabel>
                            <Input id="Email" name="Email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="Password">Password</InputLabel>
                            <Input id="Password" name="Password" autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}
export default withStyles(styles)(Form)