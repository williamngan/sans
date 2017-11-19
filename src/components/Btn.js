// @flow

import {cssNames, resolveCssProps} from './Util';
import * as React from 'react';
import styles from "./css/Btn.css";
import {Box} from "./Box";
import type {BoxJustify, BoxAlign} from "./Box";

export type BtnSize = "xs" | "s" | "m" | "l" | "xl";
export type BtnColor = "success" | "error" | "info" | "highlight" | "primary" | "secondary" | "light" | "dark" | "darkBlend" | "lightBlend";

type Props = {
    children?: React.Node,
    justify?: BoxJustify,
    align?: BoxAlign,

    size?: BtnSize,
    color?: BtnColor,

    width?: number,
    height?: number,
}


export class Btn extends React.Component<Props> {
    static defaultProps = {
        justify: "center",
        align: "center"
    }

    _classProps( props:Props, styles:{[key: string]: any} ) {
        let cls = resolveCssProps( props, ["size", "color"] );
        cls.unshift( "btn" );
        return cssNames( styles, cls );
    }

    render() {
        return <Box
                    align={this.props.align}
                    justify={this.props.justify}
                    width={this.props.width}
                    height={this.props.height}
                    xclass={ this._classProps( this.props, styles ) } 
                    >
                    {this.props.children}
               </Box>
    }

}