/* global tw */

import React from 'react'
import styled from 'react-emotion'

const PageWrapper = styled('div')`
	${tw`p-4`};
`

const PageTitle = styled('h1')`
	${tw`text-center`};
`

const PageContent = styled('p')`
	${tw`text-center`};
`

const StyledLink = styled(Link)`
	${tw`block w-32 bg-grey font-semibold hover:bg-purple hover:text-white shadow-md no-underline leading-normal p-4 mt-4 rounded text-grey-lightest text-lg mx-auto`};
`


export default () => (
  <PageWrapper>
    <PageTitle>NOT FOUND</PageTitle>
    <PageContent>You just hit a page that doesn&#39;t exist, yet... the sadness.</PageContent>
		<StyledLink to="/">Home</StyledLink>
		<StyledLink to="/web/">Web</StyledLink>
  </PageWrapper>
)