import {
  Button,
  Grid,
  GridItem,
  HStack,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import AppHeader from "./components/AppHeader";
import InputBox from "./components/InputBox";
import { useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import Flashcards from "./components/Flashcards";
import TranslationLogic from "./components/service/TranslationService";
import TranslatedText from "./components/TranslatedBoxTest";

const App = () => {
  const [text, setText] = useState<string>("");
  const [sourceLang, setSourceLang] = useState<string>("en");
  const [targetLang, setTargetLang] = useState<string>("fr");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleTranslationResult = (translateText: string) => {
    setTranslatedText(translateText);
    setError(""); // Clear any previous error if translation is successful
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gap={4}
      >
        <GridItem area="nav" bg="green.100">
          <AppHeader />
        </GridItem>

        <GridItem
          area="aside"
          bg="blue"
          display={{ base: "none", lg: "block" }}
        >
          aside
        </GridItem>

        <GridItem area="main">
          <Stack>
            <LanguageSelect
              selectedLanguage={sourceLang}
              onLanguageChange={(language: string) => setSourceLang(language)}
            />
            <InputBox
              text={text}
              onTextChange={(e) => setText(e.target.value)}
            />

            {/* TranslationLogic component with the button to trigger translation */}
            <TranslationLogic
              text={text}
              sourceLang={sourceLang}
              targetLang={targetLang}
              onTranslated={handleTranslationResult}
              onError={setError}
            />

            {/* Display the translated text */}
            <TranslatedText translatedText={translatedText} />

            <HStack>
              <Flashcards language="English" />
              <Flashcards language="Spanish" />
              <Flashcards language="German" />
              <Flashcards language="French" />
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
