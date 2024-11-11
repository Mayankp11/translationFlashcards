
import { Textarea } from "@chakra-ui/react";
import React from "react";

interface inputBoxProps {
    text : string;
    onTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputBox : React.FC<inputBoxProps> = ({text, onTextChange}) => {
  return (
   <Textarea
   value={text}
   onChange={onTextChange}
   placeholder="Enter your text here..."
   borderColor="black"
   borderRadius={2}
   width={{base:"150px", lg:"250px"}}
   height={{base:"200px" , lg:"300px"}}
   />

  );
};

export default InputBox;