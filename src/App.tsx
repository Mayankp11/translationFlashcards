import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import AppHeader from "./components/AppHeader";
import InputBox from "./components/InputBox";
import { useState } from "react";
import LanguageSelect from "./components/LanguageSelect";
import Flashcards from "./components/Flashcards";

const App = () => {
  const [text, setText] = useState<string>("");
  const [sourceLang, setSourceLang] = useState<string>("en");

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

        {/* Show the 'aside' grid item only on screens larger than 'lg' */}
        <GridItem
          area="aside"
          bg="blue"
          display={{ base: "none", lg: "block" }} // Shows only on large screens and up
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
            <HStack>
              <Flashcards language="English" />
              <Flashcards language="Spanish"/>
              <Flashcards language="German"/>
              <Flashcards language="French"/>
              
            </HStack>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
