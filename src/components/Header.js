import React, { useState } from 'react';
import Navigation from "./Navigation";

function Header(props) {

    return (
        <section>
            <section id="header">
                <Navigation navigate={props.navigate} page={props.page} />
            </section>
        </section>
    );
}

export default Header;