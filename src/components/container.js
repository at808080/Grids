import React from "react";
import Tile from "./tile";

export default function Container(props) {
    const { details } = props;
    return (
        <div class={props.class}>
            <Tile class="tile" text="1" width={2} height={2}/>
            <Tile class="tile" text="2" width={1} height={1}/>
            <Tile class="tile" text="3" width={1} height={1}/>
            <Tile class="tile" text="4" width={2} height={1}/>
            <Tile class="tile" text="5" width={1} height={1}/>
        </div>
    );
}