import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  gap: 1em;
  height: 100vh;
  width: 100%;
`;

export const MainContent = styled.main`
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  padding: 1em 1em 1em 0;
  box-sizing: border-box;
`;
