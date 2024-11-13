// src/components/TranslateButton.tsx
import React from "react";
import { Button, CircularProgress } from "@mui/material";

interface TranslateButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ onClick, isLoading }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={isLoading} // Disable button while loading
      style={{ position: "relative", minWidth: "120px" }} // To align loader within button
    >
      {isLoading ? (
        <CircularProgress size={24} style={{ color: "white", position: "absolute" }} />
      ) : (
        "Translate"
      )}
    </Button>
  );
};

export default TranslateButton;
