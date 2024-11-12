import { Card, CardContent, Typography, Box } from "@mui/material";
import React, { useState } from "react";

interface FlashcardProps {
  language: string;
  
}

const Flashcards: React.FC<FlashcardProps> = ({ language}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Box
      onClick={handleFlip}
      sx={{
        perspective: "1000px", // Creates a 3D effect for the flip
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "200px",
          height: "250px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <Card
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backfaceVisibility: "hidden",
            border: "2px solid #000",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography variant="h6" align="center">
              {language}
            </Typography>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backfaceVisibility: "hidden",
            border: "2px solid #000",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotateY(180deg)", // Rotate the back side
            backgroundColor: "#f5f5f5",
          }}
        >
          <CardContent>
            <Typography variant="h6" align="center">
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Flashcards;
