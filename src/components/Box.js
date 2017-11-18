// @flow

import {cssNames, resolveCssProps, resolveStyleProps} from './Util';
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
  content?: string, // align-contents
  
  // item props
  order?: number,
  alignSelf?: string,
  flex?: string, // [flex-grow, flex-shrink, basis]

  // style props
  pad?: string|number
};

export class Box extends React.Component<Props> {

  _classProps( props:Props, styles:{[key: string]: any} ) {
    let cls = resolveCssProps( props, ["vertical", "reverse", "verticalreverse", "wrap", "justify", "align", "content"] );
    cls.unshift("box");
    if (typeof props.pad === "number") cls.push( "pad"+props.pad );
    return cssNames( styles, cls );
  }

  _styleProps( props:Props ) {
    let res = resolveStyleProps( props, ["width", "height", "order", "alignSelf", "flex"] );
    if (typeof props.pad === "number") {
      res["padding"] = props["pad"];
    }
    return res;
  }


  render() {
    return <div className={ this._classProps( this.props, styles ) } 
                style={ this._styleProps(this.props) }>
                {this.props.children}
           </div>;
  }

}