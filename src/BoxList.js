import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div className="BoxList">
        <h1>Color Box Maker</h1>

        <NewBoxForm createBox={this.create} />
        <div className="BoxList-boxes">{boxes}</div>
      </div>
    );
  }
}
