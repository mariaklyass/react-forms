import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import "./Form.css";
// import uuid from "uuid/v4";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 litres" },
        { name: "Bread", qty: "2 loaves" },
      ],
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="Form">
        <h1>Shopping List</h1>
        {this.renderItems()}
        <div className="Form-add">
          <ShoppingListForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}
