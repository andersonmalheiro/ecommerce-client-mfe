import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  height: 100vh;
  width: 100%;
`;

export const Sidebar = styled.aside`
  background: #fff;
  padding: 2em;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`;

export const SidebarTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const MainContent = styled.main`
  height: 100vh;
  width: 100%;
`;
