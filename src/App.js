import "./App.css";

import React, {Component} from "react";

var text;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {x: 0, y: 0},
      hover: false,
    };

    this.trailer = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.updateMousePosition);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.updateMousePosition);
  }

  updateMousePosition = (e) => {
    setTimeout(() => {
      this.setState({
        position: {
          x: e.clientX - this.trailer.current.offsetWidth / 2,
          y: e.clientY - this.trailer.current.offsetHeight / 2,
        },
      });
    }, 80);
  };

  divHover = (e) => {
    this.setState({hover: true});
    text = e;
  };
  divLeave = () => {
    this.setState({hover: false});
    text = "";
  };

  render() {
    const {position} = this.state;
    return (
      <div>
        {/* trailer div */}
        <div
          style={{
            position: "relative",
            transform: `translate(${position.x}px,${position.y}px)`,
            zIndex: 5000,
          }}
        >
          <div
            ref={this.trailer}
            className={!this.state.hover ? "trailer" : "trailerHover"}
          >
            <div>
              <p>{text}</p>
            </div>
          </div>
        </div>

        {/* blog */}
        <div className="blogContainer">
          <div
            className="blog"
            id="1"
            onMouseEnter={() => {
              this.divHover("mha");
            }}
            onMouseLeave={this.divLeave}
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.CfvtDhtIpUSlelwEbXn1LwHaLg%26pid%3DApi&f=1&ipt=f618e7fafac21df318840cfe84e85bd0802b8efa3bbb739d72a92ca2b77b9d29&ipo=images"
              alt="img1"
            />
          </div>
          <div
            className="blog"
            id="2"
            onMouseEnter={() => {
              this.divHover("horimiya");
            }}
            onMouseLeave={this.divLeave}
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-SE_8E5J2_2Y7osxArkJsAHaJQ%26pid%3DApi&f=1&ipt=1839037d08dd9127793b38466c88d18a317fc7085488f20fbe558ea701a312f5&ipo=images"
              alt="img1"
            />
          </div>
          <div
            className="blog"
            id="3"
            onMouseEnter={() => {
              this.divHover("waifu");
            }}
            onMouseLeave={this.divLeave}
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B2szNq_jGL65Kk_WSRXEdwHaHa%26pid%3DApi&f=1&ipt=ab5bf0566803672b6086bdef6e07d4976cfc9a64cee199f876e1b8044402c023&ipo=images"
              alt="img1"
            />
          </div>
          <div
            className="blog"
            id="4"
            onMouseEnter={() => {
              this.divHover("makima");
            }}
            onMouseLeave={this.divLeave}
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6V9rpCepLKZV1raFuJb0dAHaL2%26pid%3DApi&f=1&ipt=34927bdfadd7d467c6df3c02d511b9a888631cddf24a3881ef6ae15fa6042868&ipo=images"
              alt="img1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
