import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface TranslationProps {
  text: string;
  sourceLang: string;
  targetLang: string;
  onTranslated: (translatedText: string) => void;
  onError: (errorMsg: string) => void;  // Add the onError prop
}

const TranslationLogic: React.FC<TranslationProps> = ({
  text,
  sourceLang,
  targetLang,
  onTranslated,
  onError,  // Destructure the onError prop
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Replace with actual API key
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
      const errorMessage = "Both languages cannot be the same";  // Customize error message
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
