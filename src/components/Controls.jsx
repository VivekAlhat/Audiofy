import { HStack, Text, Icon, Button } from "@chakra-ui/react";
import { MdPeople, MdMic, MdMicOff } from "react-icons/md";
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectLocalPeerRole,
} from "@100mslive/hms-video-react";

const Controls = ({ count }) => {
  const roomActions = useHMSActions();
  const { name } = useHMSStore(selectLocalPeerRole);
  const isUserAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);

  const toggleAudio = () => {
    roomActions.setLocalAudioEnabled(!isUserAudioEnabled);
  };

  const leaveRoom = () => {
    name !== null && roomActions.leave();
  };

  return (
    <HStack
      bgColor="facebook.300"
      position="fixed"
      justify="center"
      align="center"
      padding="3"
      spacing="16"
      height="10%"
      width="full"
      left="0"
      bottom="0"
    >
      <HStack>
        <Icon as={MdPeople} h="6" w="6" />
        <Text>{count}</Text>
      </HStack>
      {name !== "listener" && (
        <Icon
          as={isUserAudioEnabled ? MdMic : MdMicOff}
          onClick={toggleAudio}
          cursor="pointer"
          h="6"
          w="6"
        />
      )}
      <Button variant="outline" onClick={leaveRoom}>
        Leave Room
      </Button>
    </HStack>
  );
};

export default Controls;
