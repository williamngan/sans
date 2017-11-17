
import * as React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from "./css/Box.css";

type Props = {
  // container props
  vertical?: boolean,
  reverse?: boolean,
  wrap?: boolean,
  justify?: string,
  align?: string,
  wrapAlign?: boolean, // align-contents
  
  // item props
  order?: number,
  selfAlign?: string,
  weight?: number[], // [flex-shrink, flex-grow]
  basis?: string,

  // style props
  pad?: string|number
};

export class Box extends React.Component<Props> {

  render() {
    return <div className={styles.btn}>{this.props.children}!</div>;
  }

}