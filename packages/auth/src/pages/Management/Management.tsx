import React from 'react';
import SideMenu from '@components/SideMenu';
import requireAuth from '@hoc/withAuth';
import { Outlet } from 'react-router';
import { Container, MainContent } from './Management.styles';

const Management = () => (
  <Container>
    <SideMenu />

    <MainContent>
      <Outlet />
    </MainContent>
  </Container>
);

export default requireAuth(Management);
