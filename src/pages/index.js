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
import '../layouts/index.css'

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
					<Tagline>What does your brand need?</Tagline>
					<StyledLink to="/web/">Web</StyledLink>
					<StyledLink to="/media/">Media</StyledLink>
					<StyledLink to="/systems/">Systems</StyledLink>
				</TextContainer>
				<TextContainer>
					<Tagline>Who we are</Tagline>
					<StyledLink to="/about/">About</StyledLink>
					<StyledLink to="/connect/">Connnect</StyledLink>
				</TextContainer>
			</Wrapper>
		</Container>
	</Page>
)
