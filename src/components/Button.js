
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from "./css/Button.css";


export class Button extends React.Component {

    render() {
        return <div className={styles.btn}>{this.props.children}!</div>;
    }

}