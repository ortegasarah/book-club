import React from 'react'
import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
const Header = ({ children }) => (
    <HeaderContainer>
        <img src={Logo} width="200" alt="" title='Book Club' />
        {children}
    </HeaderContainer>

)

export default Header