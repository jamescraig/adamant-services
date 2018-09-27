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
						Web
					</Tagline>
					<h3>
						Digital Art & Science
					</h3>
					<p>
						We consider every website a living artwork. We use best of breed tools to create an emotional response that connects with your customer.
					</p>
					<p>IMAGERY</p>
					<p>Last Spike 3d</p>
					<h3>
						Faster is better
					</h3>
					<p>
						We get the most out of every platform. That means your site looks and works great whether on your phone or your desktop.
					</p>
					<h3>
						Responsive
					</h3>
					<p>
						We get the most out of every platform. That means your site looks and works great whether on your phone or your desktop.
					</p>
					<h3>
						Customer Driven Design
					</h3>
					<p>
						A deep understanding of your customer drives the design imperatives and functional requirements.
					</p>
					<StyledLink to="/connect">Connect</StyledLink>
					<StyledLink to="/">Back Home</StyledLink>
				</TextContainer>
			</Wrapper>
		</Container>
	</Page>
)
