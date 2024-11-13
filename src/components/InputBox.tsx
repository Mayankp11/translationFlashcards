// src/components/InputBox.tsx
import React from "react";
import { Input, Textarea } from "@chakra-ui/react";

interface InputBoxProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox: React.FC<InputBoxProps> = ({ inputText, setInputText }) => {
  return (
    <Textarea
     
      placeholder="Enter text to translate"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      height="80px"
      width="400px"
      mb={4}
    />
  );
};

export default InputBox;
