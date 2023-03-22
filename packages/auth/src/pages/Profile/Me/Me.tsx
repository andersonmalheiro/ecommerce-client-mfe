import { AuthContext } from '@context/AuthContext';
import withAuth from '@hoc/withAuth/withAuth';
import { User } from '@services/user/user.dto';
import { getUser } from '@services/user/user.service';
import jwt_decode from 'jwt-decode';
import React from 'react';
import { Container, ProfileCard, ProfileDataRow } from './Me.styles';

type TokenData = {
  userId: number;
  iat: number;
  exp: number;
};

const Me = () => {
  const { token } = React.useContext(AuthContext);
  const [user, setUser] = React.useState<User>();

  const loadData = async () => {
    if (token) {
      const decoded: TokenData = jwt_decode(token);

      try {
        const res = await getUser(decoded.userId);
        if (res) {
          setUser(res);
        }
      } catch (error) {
        setUser(undefined);
      }
    }
  };

  React.useEffect(() => {
    if (token) {
      loadData();
    }
  }, [token]);

  return (
    <Container>
      <ProfileCard>
        <h1>Details</h1>
        <ProfileDataRow>
          <strong>Name: </strong>
          <span>{user?.name}</span>
        </ProfileDataRow>
        <ProfileDataRow>
          <strong>Created at</strong>
          <span>{user?.createdAt}</span>
        </ProfileDataRow>
      </ProfileCard>
    </Container>
  );
};

export default withAuth(Me);
