import { v4 as uuidv4 } from "uuid";

const getUserToken = async (role) => {
  const response = await fetch(
    `${process.env.REACT_APP_TOKEN_ENDPOINT}api/token`,
    {
      method: `POST`,
      body: JSON.stringify({
        user_id: uuidv4(),
        role: role,
        room_id: process.env.REACT_APP_ROOM_ID,
      }),
    }
  );
  const { token } = await response.json();
  return token;
};

export { getUserToken };
