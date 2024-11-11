import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

interface LanguageSelectProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const languages = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "hi", label: "हिंदी" },
    { value: "mr", label: "मराठी" },
  ];

  return (
    <FormControl variant="outlined" margin="dense" style={{ width: '400px' }}>
      <InputLabel id="language-select-label">Select Language</InputLabel>
      <Select
        labelId="language-select-label"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value as string)}
        label="Select Language"
        size="medium"
        style={{ width: '100%' }} // Adjust the width as needed
      >
        {languages.map((lang) => (
          <MenuItem key={lang.value} value={lang.value}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
