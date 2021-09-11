import { useState, useEffect, useRef } from "react";
import { VStack, HStack, Spacer, Divider, Input, Text } from "@chakra-ui/react";
import {
  useHMSStore,
  useHMSActions,
  useHMSNotifications,
  selectHMSMessages,
} from "@100mslive/hms-video-react";

const Chat = () => {
  const msgRef = useRef(null);
  const [message, setMessage] = useState("");
  const chatActions = useHMSActions();
  const notifications = useHMSNotifications();
  const messages = useHMSStore(selectHMSMessages);

  useEffect(() => {
    msgRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, notifications]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    chatActions.sendBroadcastMessage(message);
    msgRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <VStack w="40%" h="90vh" padding="2" align="flex-start">
      <Text fontSize="2xl" fontWeight="bold" alignSelf="center">
        Chat Room
      </Text>
      <Divider />
      <VStack height="90%" width="full" align="flex-start" overflowY="scroll">
        {messages.map((message, index) => (
          <HStack
            spacing="2"
            borderTop={index > 0 && "1px solid lightgray"}
            w="full"
            p="3"
            key={message.id}
          >
            <Text fontWeight="semibold" fontSize="md">
              {message.senderName}:
            </Text>
            <Text fontSize="md">{message.message}</Text>
          </HStack>
        ))}
        <div ref={msgRef}></div>
      </VStack>
      <Spacer />
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Input
          w="full"
          borderColor="blue.400"
          placeholder="Write your message here."
          value={message}
          onChange={handleChange}
        />
        <button type="submit" hidden>
          Send
        </button>
      </form>
    </VStack>
  );
};

export default Chat;
