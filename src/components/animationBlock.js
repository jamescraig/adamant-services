import React, { Component } from 'react'
import { TimelineMax } from 'gsap'

export default class ScrollMagicExample extends Component {
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined';
    const ScrollMagic = isBrowser ? require( 'ScrollMagic') : undefined;
    const controller = new ScrollMagic.Controller()
    console.log(isBrowser)

    this.animation = new TimelineMax({ paused: true })
      .fromTo(this.node, 5, { opacity: 0 }, { opacity: 0.85 })

    this.scrollAnim = new TimelineMax({ paused: true })
      .fromTo(this.title, 5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })

    const scene = new ScrollMagic.Scene({ triggerElement: this.title, triggerHook: 0.4 })
    scene.indicatorName = 'Test'
    scene.on('enter', () => this.animation.play(), this.scrollAnim.play())

    if (process.env.NODE_ENV === 'development') {
      //this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    scene.addTo(controller)
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
