import { useState } from "react";
import { useHMSActions } from "@100mslive/hms-video-react";
import {
  Center,
  VStack,
  Heading,
  Divider,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { getUserToken } from "../helpers";

const Join = () => {
  const roomActions = useHMSActions();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("listener");

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleClick = (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      setTimeout(() => {
        getUserToken(role)
          .then((token) => {
            roomActions.join({
              userName: username || "Anonymous",
              authToken: token,
              settings: {
                isAudioMuted: true,
              },
            });
            setLoading(false);
          })
          .catch((err) => alert(err.message));
      }, 200);
    } catch (err) {
      alert(err.message);
    } finally {
      setUsername("");
      setRole("listener");
    }
  };

  return (
    <Center h="xl">
      <VStack spacing="5" padding="16">
        <Heading fontStyle="oblique" textColor="purple">
          Audiofy
        </Heading>
        <Divider />
        <Input
          width="md"
          value={username}
          onChange={handleNameChange}
          placeholder="Set Username Here"
          required
        />
        <Select width="md" value={role} onChange={handleRoleChange}>
          <option value="listener">Listener</option>
          <option value="speaker">Speaker</option>
        </Select>
        <Button
          width="md"
          colorScheme="purple"
          isLoading={loading ? true : false}
          loadingText={loading && "Joining room"}
          onClick={handleClick}
        >
          Join Room
        </Button>
      </VStack>
    </Center>
  );
};

export default Join;
