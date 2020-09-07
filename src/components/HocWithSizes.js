import React from "react";

const HocWithSizes = (Comp) => {
  return class extends React.Component {
    state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount(){
      window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
      this.setState(
        {
          width: window.innerWidth,
          height: window.innerHeight,
        }
      );
    }

    render() {
      return (
        <Comp
          width={this.state.width}
          height={this.state.height} />
      );
    }
  }
}

class Container extends React.Component {
  render() {
    const { width, height } = this.props;

    return (
      <div>
        <h1>It works!</h1>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
      </div>
    )
  }
}

export default HocWithSizes(Container);