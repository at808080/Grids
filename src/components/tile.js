import React from "react";

export default function Tile(props) {

    return (
        <div class={"tile " + props.tileclass}>{props.text}</div>
    );
}
