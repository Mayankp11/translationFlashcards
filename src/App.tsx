import { Grid, GridItem } from "@chakra-ui/react";
import AppHeader from "./components/AppHeader";
import InputBox from "./components/inputBox";
import { useState } from "react";

const App = () => {
const [text , setText] = useState<string>('');

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
          <AppHeader/>
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
          <InputBox text={text} onTextChange={(e) => setText(e.target.value)}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
