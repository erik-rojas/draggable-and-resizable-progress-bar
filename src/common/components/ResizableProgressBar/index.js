import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ResizableBox } from 'react-resizable'

import './style.scss'

class ResizableProgressBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maxWidth: 800,
      resizableInfo: {
        width: 300,
        height: 20,
        axis: 'x',
        handle: (<strong className='resize-handler'></strong>),
        minConstraints: [0, Infinity],
        maxConstraints: [800, Infinity],
        onResize: this.resize
      }
    }
  }

  resize = (e, data) => {
    const { resizeFunc } = this.props
    const { index } = this.props

    resizeFunc(index, data.size)
  }

  render() {
    const { resizableInfo, maxWidth } = this.state
    const { width } = this.props

    resizableInfo.width = width

    return (
      <div className='resizable-progress-bar'>
        <div className='progress-bar-content'>
          <ResizableBox className='resizable-bar' {...resizableInfo} />
        </div>
        <div className='percent-value'>{Number(width / maxWidth * 100).toFixed(2)} %</div>
      </div>
    )
  }
}

ResizableProgressBar.propTypes = {
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default ResizableProgressBar
