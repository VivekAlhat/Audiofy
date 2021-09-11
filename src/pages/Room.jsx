import PeerDetails from "../components/PeerDetails";
import Controls from "../components/Controls";
import Chat from "../components/Chat";
import { useHMSStore, selectPeers } from "@100mslive/hms-video-react";
import { Flex } from "@chakra-ui/react";

const Room = () => {
  const peers = useHMSStore(selectPeers);

  return (
    <>
      <Flex>
        <Flex wrap="wrap" width="60%" bgColor="ghostwhite" height="90vh">
          {peers.map((peer) => (
            <PeerDetails key={peer.id} peer={peer} />
          ))}
        </Flex>
        <Chat />
      </Flex>
      <Controls count={peers.length} />
    </>
  );
};

export default Room;
