import React from 'react'
import styled from 'styled-components'

import { ContextProvider } from '../Global/Context'
const Navbar = () => {

    const { openModel, user, loader, logout } = React.useContext(
            ContextProvider
        )
        // console.log("my model", model);
    const openForms = () => {
        openModel()
    }
    const userLogout = () => {
        logout()
    }
    const checkUser = () => {
        return !loader ? (!loader && user ? ( <
            li > { ' ' } { user.displayName }
            / <span onClick={userLogout}>logout</span > { ' ' } <
            /li>
        ) : ( <
            li onClick = { openForms } > Register / Login < /li>
        )) : (
            '...'
        )
    }

    return ( <
        StyledDiv >
        <
        StyleFirst >
        <
        StyleFirstLogo >
        <
        StyledImg src = '/images/instagramLogo.png'
        alt = '' / >
        <
        /StyleFirstLogo>{' '} < /
        StyleFirst > { ' ' } <
        StyleMiddle > < /StyleMiddle>{' '} <
        StyleLast > { checkUser() } { ' ' } < /
        StyleLast > { ' ' } <
        /StyledDiv>
    )
}
const StyledDiv = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  background: var(--white);
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #efefef;
  align-items: center;
`
const StyleFirst = styled.div `
  width: 33.33333333333333%;
`
const StyleFirstLogo = styled.div `
  margin-top: 6px;
`
const StyleMiddle = styled.div `
  width: 33.33333333333333%;
  display: flex;
  justify-content: center;
`

const StyledImg = styled.img `
  object-fit: cover;
  display: block;
`

const StyleLast = styled.div `
  width: 33.33333333333333%;
  display: flex;
  justify-content: flex-end;
`


export default Navbar