// src/components/Flashcards.tsx
import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { Card, CardContent } from "@mui/material";

interface FlashcardsProps {
  translations: { [key: string]: string };
  languages: { code: string; name: string }[];
}

const Flashcards: React.FC<FlashcardsProps> = ({ translations, languages }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20px">
      {" "}
      {/* Added spacing */}
      {languages.map((language) => (
        <Card key={language.code} style={{ height: "150px" }}>
          <CardContent>
            <Text textAlign="center" fontWeight="bold">{language.name}</Text>
            <Text textAlign="center" mt={4}>{translations[language.code] || "?"}</Text>
          </CardContent>
        </Card>
      ))}
    </SimpleGrid>

    // {/* <Grid container spacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
    // {languages.map((language) => (
    //   <Grid  key={language.code}> {/* Adjust item width based on screen size */}
    //     <Card sx={{ minHeight: "300px", minWidth: "200px" }}>
    //       <CardContent>
    //         <Typography variant="h6">{language.name}</Typography>
    //         <Typography variant="body1">
    //           {translations[language.code] || "?"}
    //         </Typography>
    //       </CardContent>
    //     </Card>
    //   </Grid>
    // ))}
    // </Grid> */}

    // <>
    // <Grid2 container spacing={4}>
    //   {languages.map((language) => (
    //     <Grid2 item xs={12} sm={6} md={4} key={language.code}>
    //       <Card style={{ height: "150px" }}>
    //         <CardContent>
    //           <Typography variant="h6" fontWeight="bold">
    //             {language.name}
    //           </Typography>
    //           <Typography variant="body1" style={{ marginTop: "16px" }}>
    //             {translations[language.code] || "?"}
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid2>
    //   ))}
    // </Grid2>
    // </>
  );
};

export default Flashcards;
