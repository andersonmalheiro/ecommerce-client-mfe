import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 1em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;
  padding: 1em;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 20px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 2px solid #dedede;
  }
`;

export const ProfileDataRow = styled.div`
  display: flex;
  gap: 5px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
