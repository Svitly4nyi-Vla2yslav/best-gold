import { Suspense} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  LayoutWrap,
  Line,
  NavLinkLogo,
  NavList,
} from './Layout.styled';

import { Toaster } from 'react-hot-toast';

export const Layout: React.FC = () => {



  return (
    <LayoutWrap>
      <HeaderContainer>
        <NavList>
          <li>
            <NavLink to="/">
            </NavLink>
          </li>
          <li>
            <NavLinkLogo to="/"></NavLinkLogo>
          </li>
        </NavList>
       
      </HeaderContainer>
      <Line></Line>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />

    
    </LayoutWrap>
  );
};
