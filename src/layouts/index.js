/* global tw */

import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Transition from "../components/transition"
import styled from 'react-emotion'
import logoSrc from '../media/adamant-logo.svg'

import "./layout.css"

const Navbar = styled('div')`
  ${tw`flex flex-col bg-grey-light pt-4`};
`

const Homelink = styled(Link)`
  ${tw`text-black no-underline`};
`
const NavbarTitle = styled('h1')`
  ${tw`text-center`};
`

const Logo = styled('img')`
  ${tw`w-32 mx-auto block`};
`

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Adamant Labs"
      meta={[
        { name: `description`, content: `Adamant Labs` },
        { name: `keywords`, content: `adamant labs, adamant labs vancouver` },
      ]}
    />
    <Navbar>
      <Homelink to="/">
        <Logo src={logoSrc} alt="Adamant Labs Logo"/>
        <NavbarTitle>Adamant Labs</NavbarTitle>
      </Homelink>
    </Navbar>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <Transition location={location}>{children}</Transition>
    </div>
  </div>
)

export default TemplateWrapper
