import { Grid, GridItem } from "@chakra-ui/react";
import AppHeader from "./components/AppHeader";
import InputBox from "./components/InputBox";
import { useState } from "react";
import LanguageSelect from "./components/LanguageSelect";

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
        <GridItem area="nav">
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
          <LanguageSelect
            label="Select Language"
            selectedLanguage={sourceLang}
            onLanguageChange={(language: string) => setSourceLang(language)}
          />
          <InputBox text={text} onTextChange={(e) => setText(e.target.value)} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
