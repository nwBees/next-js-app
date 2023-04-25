import React, { useEffect, useState } from "react";
import {
  Button,
  Icon,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Circle,
} from "@chakra-ui/react";
import { FaAngleDoubleRight, FaSmile, FaKeyboard } from "react-icons/fa";

const openAiApiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are a crisis center operator called Kindly comforting a person experiencing a personal crisis.",
    },
    {
      role: "assistant",
      content: "Hi my name is Kiply and I'm here to listen to you!",
    },
  ]);
  const [isVisible, setIsVisible] = useState(true);
  const [isUserWaiting, setIsUserWaiting] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const chatbotContainer = document.getElementById("chatbot-container");
    if (!isVisible) {
      chatbotContainer.style.height = "50px";
    } else {
      chatbotContainer.style.height = "500px";
    }
  }, [isVisible]);

  const handleMessageSubmit = (e) => {
    const messageInput = document.getElementById("chatbot-input");
    let message = messageInput.value;

    setIsUserWaiting(true);
    setMessages([...messages, { role: "user", content: message }]);
    messageInput.value = "";
  };

  useEffect(() => {
    const fetchResponse = async () => {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${openAiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0.5,
          }),
        }
      );
      const data = await response.json();

      setMessages([
        ...messages,
        { role: "assistant", content: data.choices[0].message.content },
      ]);
    };

    if (messages.length > 1 && isUserWaiting) {
      fetchResponse();
      setIsUserWaiting(false);
    }
  }, [messages]);

  return (
    <Box
      id="chatbot-container"
      w="400px"
      h="500px"
      position="fixed"
      zIndex={9999}
      bottom="20px"
      right="20px"
      display="flex"
      flexDirection="column"
      color="#333"
    >
      <Button onClick={handleToggleVisibility} alignSelf="end" mb="10px">
        Speak with our AI Kiply
      </Button>
      {isVisible && (
        <Box
          id="chatbot-content"
          w="400px"
          h="450px"
          backgroundColor="#6da9d6"
          p="20px"
          borderRadius="20px"
          fontSize="20px"
          display="grid"
          gridTemplateRows="1fr 80px"
        >
          <Box fontSize="16px" h="320px" overflowY="scroll">
            {messages.slice(1).map((message, index) => (
              <Box
                key={index}
                style={{
                  textAlign: message.role == "assistant" ? "left" : "right",
                }}
                pt="5px"
                pb="5px"
                pr="8px"
              >
                {message.role == "assistant" ? (
                  <Box display="flex" alignItems="center" minHeight="50px">
                    <Circle size="30px" backgroundColor="white" mr="8px">
                      <Icon as={FaKeyboard} />
                    </Circle>
                    <Text w="270px">{message.content}</Text>
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="end"
                  >
                    <Text w="270px">{message.content}</Text>
                    <Circle size="30px" backgroundColor="white" ml="8px">
                      <Icon as={FaSmile} />
                    </Circle>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box display="flex">
            <FormControl>
              <Input
                type="text"
                id="chatbot-input"
                placeholder="Send a message..."
                color="#333"
                autoComplete="off"
              />
              <FormHelperText>
                We'll never store any personal data.
              </FormHelperText>
            </FormControl>
            <Button ml="10px" onClick={handleMessageSubmit}>
              <Icon as={FaAngleDoubleRight} />
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Chatbot;
