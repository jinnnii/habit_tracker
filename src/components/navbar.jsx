import React, { PureComponent } from "react";

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <span>
                    <i className="navbar-logo fa-solid fa-circle-check"></i>
                </span>
                <span className="navar-title">Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;
