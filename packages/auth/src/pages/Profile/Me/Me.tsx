import jwt_decode from "jwt-decode";
import React from "react";
import { AuthContext } from "../../../context/AuthContext";
import { getUser, IUserData } from "../../../services/user.service";
import { Container, ProfileCard, ProfileDataRow } from "./Me.styles";

type TokenData = {
  userId: number;
  iat: number;
  exp: number;
};

const Me = () => {
  const { token } = React.useContext(AuthContext);
  const [user, setUser] = React.useState<IUserData>();

  const loadData = async () => {
    if (token) {
      const decoded: TokenData = jwt_decode(token);

      console.log("decoded :>> ", decoded);

      try {
        const res = await getUser(decoded.userId);
        res && setUser(res);
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
          <label>Name: </label>
          <span>{user?.name}</span>
        </ProfileDataRow>
        <ProfileDataRow>
          <label>Created at</label>
          <span>{user?.createdAt}</span>
        </ProfileDataRow>
      </ProfileCard>
    </Container>
  );
};

export default Me;
