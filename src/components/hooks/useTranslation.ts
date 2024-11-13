// src/hooks/useTranslation.ts
import { useState } from "react";
import axios from "axios";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "hi", name: "Hindi" },
  { code: "mr", name: "Marathi" },
];

export const useTranslation = () => {
  const [translations, setTranslations] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state

  const translateText = async (inputText: string) => {
    setLoading(true);
    setError(null); // Reset error state on a new request

    const requests = languages.map((language) =>
      axios.get(`https://translation.googleapis.com/language/translate/v2`, {
        params: {
          q: inputText,
          target: language.code,
          key: import.meta.env.VITE_GOOGLE_API_KEY,
        },
      })
    );

    try {
      const responses = await Promise.all(requests);
      const newTranslations: { [key: string]: string } = {};
      responses.forEach((response, index) => {
        newTranslations[languages[index].code] = response.data.data.translations[0].translatedText;
      });
      setTranslations(newTranslations);
    } catch (error) {
      console.error("Translation failed", error);
      setError("Failed to fetch translations. Please try again."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const resetTranslations = () => {
    setTranslations({});
    setError(null); // Clear error when translations are reset
  };

  return { translations, translateText, loading, languages, resetTranslations, error };
};
