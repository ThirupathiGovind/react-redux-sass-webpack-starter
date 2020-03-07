import React, { Fragment } from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <header className="header">App Header</header>
                <section className="body">
                    <h1 className="title">Hello and Welcome, React-Redux-Sass-Webpack Starter, Awesome right!</h1>
                </section>
                <footer className="header">App Footer</footer>
            </Fragment>
        )
    }
}
