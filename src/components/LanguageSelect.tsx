import React from "react";
import Select from "react-select";

interface LanguageSelectProps {
  label: string;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  label,
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
    <>
      <label>{label}</label>
      <Select
        options={languages}
        value={languages.find((lang) => lang.value === selectedLanguage)}
        onChange={(option) => option && onLanguageChange(option.value)}
        placeholder="Select language"
        
      />
    </>
  );
};

export default LanguageSelect;
