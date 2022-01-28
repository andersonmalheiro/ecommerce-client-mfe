import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: max-content auto;
  padding: 1em;
  gap: 1em;
`;

export const ProductList = styled.section`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, 300px);
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
`;
