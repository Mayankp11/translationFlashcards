// src/App.tsx
import React, { useState } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import InputBox from "./components/InputBox";
import TranslateButton from "./components/TranslateButton";
import Flashcards from "./components/Flashcards";
import { useTranslation } from "./components/hooks/useTranslation";
import AppHeader from "./components/AppHeader";
import LanguageSelect from "./components/LanguageSelect";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const { translations, translateText, loading, languages } = useTranslation();
  // const [selectLang, setSelectLang] = useState<string>("en");

  const handleTranslate = () => {
    translateText(inputText);
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
        <GridItem area="nav" bg="green.200">
          <AppHeader />
        </GridItem>
        <GridItem area="aside" bg="blue.200"></GridItem>
        <GridItem area="main">
          {/* <LanguageSelect selectedLanguage={selectLang} onLanguageChange={(language) => setSelectLang(language)}/> */}
          <InputBox inputText={inputText} setInputText={setInputText} />
          <TranslateButton onClick={handleTranslate} isLoading={loading} />
          <Flashcards translations={translations} languages={languages} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
