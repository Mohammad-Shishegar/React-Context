import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch, InputBase } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { Search } from "@material-ui/icons"
import styles from "./styles/NavBarStyle"
import { ThemeContext } from "./contexts/ThemeContect"
import { LaguageContext } from "./contexts/LaguageContext"

const content = {
    english : {
        search: "Search"
    },
    french : {
        search: "Chercher"
    },
    spanish:{
        search: "Buscar"
    }
}

class NavBar extends Component {
    static contextType = ThemeContext
    render() {
        const { classes } = this.props
        const { isDarkMode, toggleTheme } = this.context

        const changeSearch = (language) => {
            var search = content[language]
            return search.search
        }

        return (
            <LaguageContext.Consumer>
                {value =>
                    <div className={classes.root}>
                        <AppBar position={"static"} color={isDarkMode ? "default" : "primary"}>
                            <Toolbar>
                                <IconButton className={classes.menuButton} color="inherit">
                                    <span></span>
                                </IconButton>
                                <Typography className={classes.title} variant="h6" color="inherit">
                                    AppTitle {value.language}
                        </Typography>
                                <Switch onChange={toggleTheme} />
                                <div className={classes.grow} />
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <Search />
                                    </div>
                                    <InputBase
                                        placeholder= {`${changeSearch(value.language)}...`}
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput
                                        }}
                                    />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>
                }
            </LaguageContext.Consumer>
        )
    }
}
export default withStyles(styles)(NavBar)