import React from "react";

export default function Tile(props) {
    const style = {
        gridColumnEnd: `span ${props.width}`,
        gridRowEnd: `span ${props.height}`,
      }
    return (
        <div style={style} class={props.class}>{props.text}</div>
    );
}
