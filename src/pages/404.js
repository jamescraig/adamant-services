/* global tw */

import React from 'react'
import styled from 'react-emotion'

const PageWrapper = styled('div')`
	${tw`p-4`};
`
const PageTitle = styled('h1')`
	${tw`text-center`};
`

export default () => (
  <PageWrapper>
    <PageTitle>NOT FOUND</PageTitle>
    <p style={{ color: '#fff' }}>You just hit a route that doesn&#39;t exist, yet... the sadness.</p>
  </PageWrapper>
)