import React from 'react'
import { HeaderContainer, HeaderWrap,  NavWrap, UserContainer, Wrapper } from './Header.styled';
// import Navigation from '../Navigation/Navagation';


const Header: React.FC = () => {
  return (
    <div>  <Wrapper >
    <HeaderContainer>
      <HeaderWrap>
          <UserContainer>
            <NavWrap>
              {/* <Navigation /> */}
            </NavWrap>
          </UserContainer>
        </HeaderWrap>
      </HeaderContainer>
    </Wrapper>
    </div>
  )
}

export default Header
