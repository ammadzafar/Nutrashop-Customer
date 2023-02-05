import React, { Component } from "react";
import { Rate } from "antd";

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
      handleChange = (value) => {
        this.setState({ value });
        console.log(value)
          this.props.saveRating(value)
      }
      
  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate className="fs-2em" onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
    );
  }
}

export default Rating;
