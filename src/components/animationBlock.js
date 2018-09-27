import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import ScrollMagic, { Scene } from 'ScrollMagic'
import { TimelineMax } from 'gsap'
//import 'debug.addIndicators'

//const controller = new ScrollMagic.Controller()

export default class ScrollMagicExample extends Component {
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  static propTypes = {
    children: PropTypes.any,
  }

  componentDidMount() {
    this.animation = new TimelineMax({ paused: true })
      .fromTo(this.node, 5, { opacity: 0 }, { opacity: 0.85 })
    this.animation.play()
    /*
    this.scrollAnim = new TimelineMax({ paused: true })
      .fromTo(this.title, 5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

    this.scene = new Scene({ triggerElement: this.title, triggerHook: 0.4 })
    this.scene.indicatorName = 'Test'
    this.scene.on('enter', () => this.animation.play(), this.scrollAnim.play())

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(controller)
    */
  }

  // Binding
  refNode = (c) => {
    this.node = c
  }

  refTitle= (c) => {
    this.title = c
  }

  render() {
    const { children } = this.props
    return (
      <div ref={this.refNode} style={{background:'#ededed'}}>
        <div style={{ height: '100vh' }} ref={this.refTitle}>
          {children}
        </div>
      </div>
    )
  }
}
