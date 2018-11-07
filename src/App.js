import React, { Component } from 'react';

import styles from './App.module.scss';

import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import orange from '@material-ui/core/colors/orange';

import { IntlProvider, addLocaleData, /* FormattedHTMLMessage */ } from "react-intl";

import messages from './messages';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import Layout from './hoc/Layout/Layout';

addLocaleData([...en, ...es]);

var locale = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

// For testing
// locale = 'es-ES';

class App extends Component {

  render() {

    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        primary: orange,
      },
    });

    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            {/* <p><FormattedHTMLMessage id="App.title" defaultMessage={messages['en-UK'][App.title]}/></p> */}
            <Layout />
          </IntlProvider>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

