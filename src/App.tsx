// src/App.tsx
import React, { useState } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import InputBox from "./components/InputBox";
import TranslateButton from "./components/TranslateButton";
import Flashcards from "./components/Flashcards";
import { useTranslation } from "./components/hooks/useTranslation";
import AppHeader from "./components/AppHeader";
import LanguageSelect from "./components/LanguageSelect";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const { translations, translateText, loading, languages } = useTranslation();
  // const [selectLang, setSelectLang] = useState<string>("en");

  const handleTranslate = () => {
    translateText(inputText);
  };

  //   return (
  //     <>
  //       <Grid
  //         templateAreas={{
  //           base: `"nav" "main"`,
  //           lg: `"nav nav" "aside main"`,
  //         }}
  //         gap={4}
  //       >
  //         <GridItem area="nav" bg="green.200">
  //           <AppHeader />
  //         </GridItem>
  //         <GridItem >
  //           <SideBar />
  //         </GridItem>
  //         <GridItem area="aside">
  //           <InputBox inputText={inputText} setInputText={setInputText} />
  //           <TranslateButton onClick={handleTranslate} isLoading={loading} />
  //         </GridItem>
  //         <GridItem area="main">
  //           {/* <LanguageSelect selectedLanguage={selectLang} onLanguageChange={(language) => setSelectLang(language)}/> */}

  //           <Flashcards translations={translations} languages={languages} />
  //         </GridItem>
  //       </Grid>
  //     </>
  //   );
  // };

  // export default App;
  // import React from "react";
  // import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

  // const App: React.FC = () => {
  return (
    <Box height="100vh">
      <Grid
        templateAreas={{
          base: `"nav" "main1" "main2"`, // Stacks sections on small screens
          lg: `"nav nav" "sidebar main1" "sidebar main2"`, // Layout for larger screens
        }}
        templateColumns={{ lg: "200px 1fr" }} // Sidebar width fixed at 200px, rest take available space
        templateRows="auto 1fr 1fr" // Navigation on top, main sections below
        gap={4}
        height="100%"
      >
        {/* Top Navigation Bar */}
        <GridItem area="nav" bg="green.200" p={4}>
          <AppHeader />
        </GridItem>

        {/* Sidebar */}
        <GridItem area="sidebar" bg="blue.200" p={4}>
          <Text fontSize="xl">Sidebar (Left)</Text>
          <SideBar />
        </GridItem>

        {/* Main Section 1 */}
        <GridItem area="main1" p={4}>
          <InputBox inputText={inputText} setInputText={setInputText} />
          <TranslateButton onClick={handleTranslate} isLoading={loading} />
        </GridItem>

        {/* Main Section 2 */}
        <GridItem area="main2" p={4}>
          <Flashcards translations={translations} languages={languages} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
