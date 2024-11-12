import { Textarea } from "@chakra-ui/react";

interface TranslatedTextProps {
  translatedText: string;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ translatedText }) => {
  return (
    <Textarea
      value={translatedText}
      //Because text will only be dispalyed
      // size="md"
      placeholder="The translated text ..."
      borderColor="black"
      borderWidth="1px"
      borderRadius="4px"
      resize="none"
    //   height={{ base: "120px", md: "100%" }} // Smaller height on small screens
    //   width={{ base: "100%", md: "250px" }} // Full width on smaller screens
    //   p={{ base: 2, md: 4 }} // Padding adjustments for smaller screens
      // _focus={{ borderColor: "black", boxShadow: "none" }} // Keep black border on focus and remove default box shadow
      // _hover={{ borderColor: "black" }} // Keep border color black on hover
    
    />
  );
};

export default TranslatedText;
