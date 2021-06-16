import React from "react";
import Container from "./container";

export default function Page(props) {
    const { details } = props;
    return (
        <div class="page">
            <Container class="container" />
        </div>
    );
}