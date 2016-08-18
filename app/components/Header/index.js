/**
*
* Header
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import styles from './styles.css';

function Header() {
  const myTabs = (
    <Tabs>
      <Tab label="Home" />
      <Tab label="About Me" />
      <Tab label="Resume" />
      <Tab label="Portfolio" />
      <Tab label="Blog" />
      <Tab label="Contact" />
    </Tabs>
  );
  return (
    <div className={styles.header}>
      <AppBar
        title="Title"
        iconElementRight={myTabs}
        iconStyleRight={{ width: '40em' }}
      />
      { /* <FormattedMessage {...messages.header} />*/}
    </div>
  );
}

export default Header;
