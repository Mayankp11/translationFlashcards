import React, { useState } from "react";
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import InputBox from "./components/InputBox";
import TranslateButton from "./components/TranslateButton";
import Flashcards from "./components/Flashcards";
import { useTranslation } from "./components/hooks/useTranslation";
import AppHeader from "./components/AppHeader";
import RefreshButton from "./components/RefreshButton";

const App: React.FC = () => {
  const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
  const { translations, translateText, loading, languages, resetTranslations } = useTranslation();


  const handleTranslate = () => {
    translateText(inputText);
  };
  const handleRefresh = () => {
    setIsLoading(true);
    setInputText("");
    resetTranslations();
    // Simulate a refresh action (e.g., resetting a form, reloading data, etc.)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1-second delay for the refresh action
  };

  return (
    <Box height="100vh">
      <Grid
        templateAreas={{
          base: `"nav" "main1" "main2"`, // Stacks sections on small screens
          lg: `"nav" "main1" "main2"`, // Layout for larger screens (no sidebar)
        }}
        templateColumns="1fr" // One column layout for simplicity
        templateRows="auto 1fr auto" // Navigation on top, main sections below
        gap={4}
        height="100%" // Ensures the grid takes up the entire height of the viewport
      >
        {/* Top Navigation Bar */}
        <GridItem area="nav" bg="green.200" p={4}>
          <AppHeader />
        </GridItem>

        {/* Main Section 1 (Input and Translate) */}
        <GridItem area="main1" p={4} bg="pink.50" display="flex" justifyContent="center" alignItems="center">
          <Stack align="center">
            <InputBox inputText={inputText} setInputText={setInputText} />
            <RefreshButton onRefresh={handleRefresh} isLoading={isLoading}/>
            <TranslateButton onClick={handleTranslate} isLoading={loading} />
          </Stack>
        </GridItem>

        {/* Main Section 2 (Flashcards) */}
        <GridItem area="main2" p={4} bg="purple.100"  justifyContent="center" alignItems="center">
          <Flashcards translations={translations} languages={languages} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
