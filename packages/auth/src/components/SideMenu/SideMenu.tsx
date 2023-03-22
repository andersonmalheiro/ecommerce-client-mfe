import Button from '@components/Button';
import { AuthContext } from '@context/AuthContext';
import React, { useContext } from 'react';
import { Container, Title } from './SideMenu.styles';

const SideMenu = () => {
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Title>Management</Title>
      <div />
      <Button variant="primary" onClick={() => handleLogout()}>
        logout
      </Button>
    </Container>
  );
};

export default SideMenu;
