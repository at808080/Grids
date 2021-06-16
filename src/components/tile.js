import React from "react";

export default function Tile(props) {
    const { details } = props;
    return (
        <div class={props.class}>{props.text}</div>
    );
}