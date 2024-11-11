
import { Textarea } from "@chakra-ui/react";
import { base } from "framer-motion/client";
import React from "react";

interface inputBoxProps {
    text : string;
}

const InputBox : React.FC<inputBoxProps> = ({text}) => {
  return (
   <Textarea
   value={text}
   placeholder="Enter your text here..."
   borderColor="black"
   borderRadius={2}
   width={{base:"150px", lg:"250px"}}
   />

  );
};

export default InputBox;