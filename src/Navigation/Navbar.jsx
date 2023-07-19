import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default class Navbar extends Component {
  render() {
      return (
        <section id="navbarBlock">
          <article id="articleBlock">
            <Logo />
            <Menu />
          </article>
        </section>
      );
  }
}
