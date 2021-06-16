import React from "react";
import Tile from "./tile";
import data from "./data";

export default function Container(props) {
    const { details } = props;
    return (

        <div class={props.class}>
            {data.tiles.map((tile) => (
            <Tile text={tile.text} tileclass={tile.kindoftile} />
            ))}
        </div>
    );
}