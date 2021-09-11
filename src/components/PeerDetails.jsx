import { Avatar, Box, Text } from "@chakra-ui/react";
import { useHMSStore, selectPeerAudioByID } from "@100mslive/hms-video-react";

const PeerDetails = ({ peer }) => {
  const audioLevel = useHMSStore(selectPeerAudioByID(peer.id)) || 0;

  return (
    <Box w="fit-content" padding="5" align="center" mx="3">
      <Avatar name={peer.name} mb="2" boxShadow={audioLevel > 0 && "outline"} />
      <Text fontWeight="semibold">{peer.name}</Text>
      <Text>{peer.roleName}</Text>
    </Box>
  );
};

export default PeerDetails;
