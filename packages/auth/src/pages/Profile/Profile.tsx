import requireAuth from '@hoc/withAuth';
import React from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import {
  Container,
  MainContent,
  Sidebar,
  SidebarTitle,
} from './Profile.styles';

const Profile = () => {
  const { logout } = React.useContext(AuthContext);

  return (
    <Container>
      <Sidebar>
        <SidebarTitle>My Profile</SidebarTitle>
        <div />
        <button type="button" onClick={() => logout()}>
          logout
        </button>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default requireAuth(Profile);
