/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */

import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import logoSrc from '../media/adamant-logo.svg'
import videoSrc from '../media/video/beeblur2.mp4'
import videoSrc2 from '../media/video/blur.mp4'
import '../layouts/index.css'

const Section = styled('div')`
	${tw`relative w-full overflow-visible mb-0`};
`

const VideoBackground = styled('div')`
	${tw`flex flex-center justify-center overflow-hidden sticky pin-t w-full h-screen`};
`

const VideoContainer = styled('div')`
	${tw`absolute pin-t pin-l w-full h-full`};
`

const TextHeadline = styled('div')`
	${tw`w-full h-screen z-10`};
`

const TextWrapper = styled('div')`
	${tw`p-4`};
`


export default () => (
	<div>
		<Section>
			<VideoBackground style={{zIndex: -1}}>
				<VideoContainer style={{zIndex: -1}}>
					<video src={videoSrc} autoPlay loop muted className="fullScreenBackground"></video>
				</VideoContainer>
			</VideoBackground>
			<TextHeadline style={{marginTop: '-100vh'}}>
				<TextWrapper>
					<h3>Hello World</h3>
					<h1>This is the big news headline</h1>
				</TextWrapper>
			</TextHeadline>
			<TextHeadline>
				<TextWrapper>
					<h3>Hello World</h3>
					<h1>This is the big news headline</h1>
				</TextWrapper>
			</TextHeadline>
		</Section>
		<Section>
			<VideoBackground style={{zIndex: -1}}>
				<VideoContainer style={{zIndex: -1}}>
					<video src={videoSrc2} autoPlay loop muted className="fullScreenBackground"></video>
				</VideoContainer>
			</VideoBackground>
			<TextHeadline style={{marginTop: '-100vh'}}>
				<TextWrapper>
					<h3>Hello World</h3>
					<h1>This is the big news headline</h1>
				</TextWrapper>
			</TextHeadline>
			<TextHeadline>
				<TextWrapper>
					<h3>Hello World</h3>
					<h1>This is the big news headline</h1>
				</TextWrapper>
			</TextHeadline>
		</Section>
	</div>
)
