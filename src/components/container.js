import React from "react";
import Tile from "./tile";

export default function Container(props) {
    const { details } = props;
    return (
        <div class={props.class}>
            <Tile class="one tile" text="1">1</Tile>
            <Tile class="tile two" text="2">2</Tile>
            <Tile class="tile three" text="3">3</Tile>
            <Tile class="tile four" text="4">4</Tile>
            <Tile class="tile five" text="5">5</Tile>
        </div>
    );
}