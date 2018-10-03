/* global tw */

import React from 'react'
import styled from 'react-emotion'
import logoSrc from '../media/adamant-logo.svg'

const PageWrapper = styled('div')`
	${tw`p-4`};
`

const PageTitle = styled('h1')`
	${tw`text-center`};
`

const Logo = styled('img')`
  ${tw`w-32 mx-auto block`};
`

export default () => (
  <PageWrapper>
    <PageTitle>NOT FOUND</PageTitle>
    <Logo src={logoSrc} alt="Adamant Labs Logo"/>
    <p style={{ color: '#000' }}>You just hit a route that doesn&#39;t exist, yet... the sadness.</p>
  </PageWrapper>
)