import React, { Children, Component } from 'react'
import './Tabs.scss'

export default class Tabs extends Component {
  state = { currentIndex: 0 }
  setTitleClassName(index) {
    return index === this.state.currentIndex ? "title-active" : "title";
  }

  setContentClassName(index) {
    return index === this.state.currentIndex ? "content-block" : "content-none";
  }

  render() {
    const { children } = this.props
    return <>
      <div className='title-wrap'>
        {Children.map(children, (tabTitle, index) =>
          <div onClick={() => { this.setState({ currentIndex: index }) }} className={this.setTitleClassName(index)}
          >
            {tabTitle.props.title}
          </div>
        )}
      </div>
      <div className='content-wrap'>
        {Children.map(children,
          (content, index) => <div className={this.setContentClassName(index)}>{content}</div>
        )}
      </div>
    </>
  }
}