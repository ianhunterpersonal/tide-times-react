import React, { Component } from 'react';

import styles from './Layout.module.scss'

import { AppBar } from "@material-ui/core";

import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Tooltip from '@material-ui/core/Tooltip';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import DoneIcon from '@material-ui/icons/Done';

import Readme from '../../components/Readme/Readme';

import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

class Layout extends Component {

    state = {
        drawIsOpen: false
    }

    openTheDrawer = () => {
        this.setState({ drawIsOpen: true })
    }

    closeTheDrawer = () => {
        this.setState({ drawIsOpen: false })
    }

    render() {

        const sideList = (
            <div className={styles.list}>
                <List>
                    {['Item1', 'Item2', 'Item3', 'Item4'].map((text, index) => (

                        <Tooltip title={text + " " + index}>
                            <ListItem button key={text}>
                                <ListItemIcon><DoneIcon /></ListItemIcon>
                                <ListItemText primary={text} secondary={text} />
                            </ListItem>
                        </Tooltip>
                    ))}
                </List>
                <Divider />
            </div>
        );

        return (
            <div className={styles.root}>

                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton className={styles.menuButton} color="inherit" aria-label="Menu" onClick={this.openTheDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={styles.grow}>
                            <FormattedHTMLMessage id="App.title" defaultMessage="App.title" />
                        </Typography>
                        <Button color="inherit" >
                            <FormattedMessage id="App.action.login" defaultMessage="App.action.login" />
                        </Button>
                    </Toolbar>
                </AppBar>

                <Readme/>

                {/* <Typography variant="body1">
                    This is where your content will go.
                </Typography> */}

                <Drawer open={this.state.drawIsOpen} onClose={this.closeTheDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.closeTheDrawer}
                        onKeyDown={this.closeTheDrawer}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

export default Layout;