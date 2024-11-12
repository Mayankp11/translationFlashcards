import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface TranslationProps {
  text: string;
  sourceLang: string;
  targetLang: string;
  onTranslated: (translatedText: string) => void;
  onError: (errorMsg: string) => void;
}

const TranslationLogic: React.FC<TranslationProps> = ({
  text,
  sourceLang,
  targetLang,
  onTranslated,
  onError,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    const apiKey = "AIzaSyB3lzPW5nl5Q-T6IWnX5o0Ijwr6MckM06Q"; // Replace with your actual Google API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: "text",
      });

      const translations = response?.data?.data?.translations;
      if (translations && translations.length > 0) {
        onTranslated(translations[0].translatedText);
        setError(null); // Clear error on successful translation
      } else {
        const errorMessage = "No translations available";
        setError(errorMessage);
        onError(errorMessage);  // Pass error to parent via onError prop
        onTranslated(""); // Clear translation if no result
      }
    } catch (error) {
      console.error("Error translating text:", error);
      const errorMessage = "Error occurred while translating";  // Generic error message
      setError(errorMessage);
      onError(errorMessage);  // Pass error to parent via onError prop
      onTranslated(""); // Clear the translated text on error
    }
  };

  return (
    <Flex direction="column" align="center" justify="center">
      <Button colorScheme="blue" onClick={handleTranslate} mt={2}>
        Translate
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}  {/* Local error display */}
    </Flex>
  );
};

export default TranslationLogic;
