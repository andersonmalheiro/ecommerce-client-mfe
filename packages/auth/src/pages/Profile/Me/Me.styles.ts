import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2em;
  height: 200px;
  width: 300px;
`;

export const ProfileDataRow = styled.div`
  display: flex;
  gap: 10px;

  & label {
    font-weight: bold;
  }
`;
