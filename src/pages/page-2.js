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

const TextContainer = styled('div')`
	${tw`text-center sm:text-left sm:flex-grow`};
`

const StyledLink = styled(Link)`
	${tw`bg-purple-light border-purple border font-semibold hover:bg-purple hover:text-white leading-normal px-4 py-2 rounded-full text-grey-lightest text-xs`};
`

export default () => (
	<Page>
		<Container>
			<Wrapper>
				<TextContainer>
					<StyledLink to="/">Go back</StyledLink>
				</TextContainer>
			</Wrapper>
		</Container>
	</Page>
)
