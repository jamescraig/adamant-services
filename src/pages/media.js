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
import '../styles/index.css'

const Navbar = styled('div')`
	${tw`flex flex-col bg-grey-light pt-4`};
`

const NavbarTitle = styled('h1')`
	${tw`text-center`};
`

const Logo = styled('img')`
	${tw`w-32 mx-auto`};
`

const Page = styled('div')`
	${tw`bg-grey-light`};
`

const Container = styled('div')`
	${tw`flex justify-center items-center bg-white container my-4 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`};
`

const Wrapper = styled('div')`
	${tw`flex flex-col sm:items-center px-6 py-4`};
`

const Tagline = styled('h2')`
	${tw`mt-0`};
`

const TextContainer = styled('div')`
	${tw`text-center mb-4`};
`

const StyledLink = styled(Link)`
	${tw`block w-32 bg-grey font-semibold hover:bg-purple hover:text-white shadow-md no-underline leading-normal p-4 mt-4 rounded text-grey-lightest text-lg mx-auto`};
`

export default () => (
	<Page>
		<Navbar>
			<Logo src={logoSrc} alt="Adamant Labs Logo" />
			<NavbarTitle>Adamant Labs</NavbarTitle>
		</Navbar>
		<Container>
			<Wrapper>
				<TextContainer>
					<Tagline>
						Media
					</Tagline>
					<h3>
						Playing with Photons
					</h3>
					<p>
					We find new ways to capture and release photons to tell a story. We use video, photo, virtual and augmented reality to engage with your customer.
					</p>
					<h3>
						Technically Excellent, Emotionally Relevant
					</h3>
					<p>
						The media we create is founded on a concrete understanding of your brand's values and your customers needs. We start every project by exploring and developing these ideas.
					</p>
					<h3>
						Collaborative Creation
					</h3>
					<p>
						Our customers are creators too, so we've deployed simple and easy tools to help integrate their feedback into the review process.
					</p>
					<StyledLink to="/connect">Connect</StyledLink>
					<StyledLink to="/">Back Home</StyledLink>
				</TextContainer>
			</Wrapper>
		</Container>
	</Page>
)
