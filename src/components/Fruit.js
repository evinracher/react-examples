import React from "react";
import styles from "./Fruit.module.css";
import strawberry from "../resources/images/strawberry.jpg";
class Fruit extends React.Component {
  state = {
    quantity: 0
  }

  increaseQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  decreaseQuantity = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
  }

  clearQuantity = () => {
    this.setState({
      quantity: 0
    })
  }

  render() {
    const { quantity } = this.state;
    let price = this.props.price ? this.props.price : 0;
    let totalPrice = price * quantity;
    return (

      <div className={styles["card"]}>

        <div className={styles["fruit"]}>
          <img className={styles["fruit__img"]} src={strawberry} alt="fruit"></img>
          <h3 className={styles["title"]}>{this.props.name}</h3>
        </div>
        <div className={styles["details"]}>
          <p>Quantity: {this.state.quantity}</p>
          <p>Price: {totalPrice}</p>
        </div>
        <div className={styles["quantity-buttons"]}>
          <button onClick={this.increaseQuantity} className={styles["button"] + " " + styles["button--left"]}>+</button>
          <button onClick={this.decreaseQuantity} className={styles["button"] + " " + styles["button--right"]}>-</button>
        </div>
        <button onClick={this.clearQuantity} className={styles["clear-button"]}>Clear</button>
      </div>
    )
  }
}

const withPriceAndQuantity = (Fruit) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Fruit price={1} name={"Fresa"}/>
        </div>
      )
    }
  }
}

export default withPriceAndQuantity(Fruit);