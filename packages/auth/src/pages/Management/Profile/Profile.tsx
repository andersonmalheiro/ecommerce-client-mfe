import Input from '@components/Input';
import { AuthContext } from '@context/AuthContext';
import withAuth from '@hoc/withAuth/withAuth';
import { User } from '@services/user/user.dto';
import { getUser } from '@services/user/user.service';
import jwt_decode from 'jwt-decode';
import React from 'react';
import { Container, Section, ProfileDataRow } from './Profile.styles';

type TokenData = {
  userId: number;
  iat: number;
  exp: number;
};

const Profile = () => {
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
      <Section>
        <h1>Profile</h1>
        <ProfileDataRow>
          <Input label="Name" value={user?.name} disabled />
          <Input label="Last name" value={user?.lastName} disabled />
        </ProfileDataRow>
        <ProfileDataRow>
          <Input label="Phone" value={user?.phoneNumber} disabled />
        </ProfileDataRow>
      </Section>

      <Section>
        <h1>Addresses</h1>

        {user?.address?.length
          ? user.address.map((address) => (
              <div>
                <ProfileDataRow>
                  <Input label="Street" value={address?.street} disabled />
                  <Input
                    label="Neighborhood"
                    value={address?.neighborhood}
                    disabled
                  />
                  <Input label="Number" value={address?.number} disabled />
                </ProfileDataRow>
                <ProfileDataRow>
                  <Input label="State" value={address?.state} disabled />
                  <Input label="Country" value={address?.country} disabled />
                </ProfileDataRow>
                <br />
              </div>
            ))
          : 'Nothing to show'}
      </Section>
    </Container>
  );
};

export default withAuth(Profile);
