// @flow

import {cssNames, resolveCssProps, resolveStyleProps} from './Util';
import * as React from 'react';
import styles from "./css/Box.css";

export type BoxJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
export type BoxAlign = "start" | "end" | "center" | "stretch" | "baseline";
export type BoxAlignContent = "start" | "end" | "center" | "stretch" | "between" | "around";

type Props = {
  children?: React.Node,

  // container props
  vertical?: boolean,
  reverse?: boolean,
  wrap?: boolean,
  justify?: BoxJustify,
  align?: BoxAlign,
  content?: BoxAlignContent, // align-contents
  overflow?: string,
  
  // item props
  inline?: boolean;
  order?: number,
  alignSelf?: BoxAlign,
  flex?: string, // [flex-grow, flex-shrink, basis]

  // style props
  pad?: string|number,
  bg?:string,
  width?: number,
  height?: number,

  // additions
  xclass?: string,
  xstyle?: {}
};

export class Box extends React.Component<Props> {


  _classProps( props:Props, styles:{[key: string]: any} ) {
    let cls = resolveCssProps( props, ["inline", "vertical", "reverse", "verticalreverse", "guide", "wrap", "justify", "align", "content"] );
    cls.unshift("box");
    if (typeof props.pad === "number") cls.push( "pad"+props.pad );
    return cssNames( styles, cls );
  }

  _styleProps( props:Props ) {
    let res = resolveStyleProps( props, ["width", "height", "overflow", "order", "alignSelf", "flex"] );

    if (props.pad) res["padding"] = props.pad;
    if (props.bg) res["background"] = props.bg;

    if (props.xstyle) {
      for (let k in props.xstyle) {
        res[k] = props.xstyle[k];
      }
    }

    return res;
  }


  render() {
    let xc = (this.props.xclass) ? `${this.props.xclass} ` : "";

    return <div className={ xc+this._classProps( this.props, styles ) } 
                style={ this._styleProps(this.props) }>
                {this.props.children}
           </div>;
  }

}