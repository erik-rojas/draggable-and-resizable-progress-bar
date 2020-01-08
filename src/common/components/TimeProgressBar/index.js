import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

class TimeProgressBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepTime: 0,
      curTime: 0
    }
  }

  componentDidMount() {
    const { endTime, startTime } = this.props
    this.setState({ stepTime: endTime / 100, curTime: startTime })

    this.timer = setInterval(this.intervalTimeFunc, 1000)
  }

  intervalTimeFunc = () => {
    let { curTime } = this.state
    const { endTime } = this.props

    curTime ++

    if (curTime === endTime) {
      clearInterval(this.timer)
    }

    this.setState({ curTime })
  }

  clearTimer = () => {
    clearInterval()
  }

  render() {
    const { stepTime, curTime } = this.state

    const curPercent = curTime / stepTime

    return (
      <div className='time-progress-bar'>
        <div className='progress-bar-content'>
          <div className='fill-content' style={{ width: `${curPercent}%`}}></div>
        </div>
        <div className='percent-value'>{Number(curPercent).toFixed(2)} %</div>
      </div>
    )
  }
}

TimeProgressBar.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired
}

export default TimeProgressBar