import React, { Component } from 'react'
// 简单的双向数据绑定
export default class BindData extends Component {
  state = { value: '' }
  handleChange = (e) => this.setState({ value : e.target.value })
  render() {
    return <div>
        <input value={this.state.value} onChange={this.handleChange}/> 
        <p>{this.state.value}</p>
      </div>
  }
}