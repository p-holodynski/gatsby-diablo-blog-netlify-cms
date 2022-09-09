import * as React from "react";
import { Link } from "gatsby";

import discord from "../img/social/discord-footer.svg";

const Footer = () => {

    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-12">
                <section className="menu">
                  <div className="menu-list">
                    <div>
                      <Link to="/" className="navbar-item link">
                        Home
                      </Link>
                    </div>
                    <div>
                      <Link className="navbar-item link" to="/about">
                        About
                      </Link>
                    </div>
                    <div>
                      <Link className="navbar-item link" to="/blog">
                        News
                      </Link>
                    </div>
                  </div>
                </section>
                <section style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ display: "flex" }}>
                    <a
                      href="https://www.patrykholodynski.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#CD0D01", padding: "0.5em 0.75em", alignSelf: "center" }}
                    >
                      © Patryk Holodynski
                    </a>
                  </div>
                  <div className="social" style={{ textAlign: "end" }}>
                    <a
                      href="https://discord.gg/JkC2tVAQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <img src={discord} alt="Discord" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
