import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface FlashcardProps {
  language: string;
}

const Flashcards: React.FC<FlashcardProps> = ({ language }) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "200px",
          height: "250px",
          border: "2px solid #000", // Adds a black border with 2px thickness
          borderRadius: "8px", // Optional: Adds rounded corners
        }}
      >
        <CardContent>
          <Typography variant="h6" align="center">
            {language}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Flashcards;
