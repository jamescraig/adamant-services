/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */

import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'


const Page = styled('div')`
	${tw`flex justify-center items-center absolute pin bg-grey-light`};
`

const Container = styled('div')`
	${tw`bg-white container my-8 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`};
`

const Wrapper = styled('div')`
	${tw`sm:flex sm:items-center px-6 py-4`};
`

const Avatar = styled('img')`
	${tw`block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0`};
`

const TextContainer = styled('div')`
	${tw`text-center sm:text-left sm:flex-grow`};
`

const TextSpacing = styled('div')`
	${tw`mb-4`};
`

const Company = styled('p')`
	${tw`my-0 text-sm leading-tight text-grey-dark`};
`

const Name = styled('h1')`
	${tw`my-0 text-xl leading-tight`};
`

const StyledLink = styled(Link)`
	${tw`bg-purple-light border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-2 rounded-full text-grey-lightest text-xs`};
`

export default () => (
	<Page>
		<Container>
			<Wrapper>
				<Avatar
					src="https://avatars2.githubusercontent.com/u/5022562?s=460&v=4"
					alt="James Craig"
				/>
				<TextContainer>
					<TextSpacing>
						<Name>James Craig</Name>
						<Company>Developer at Adamant Labs</Company>
					</TextSpacing>
					<StyledLink to="/page-2/">Go to page 2</StyledLink>
				</TextContainer>
			</Wrapper>
		</Container>
	</Page>
)


/*

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
*/