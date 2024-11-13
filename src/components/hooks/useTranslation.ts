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

  const translateText = async (inputText: string) => {
    setLoading(true);
    const requests = languages.map((language) =>
      axios.get(`https://translation.googleapis.com/language/translate/v2`, {
        params: {
          q: inputText,
          target: language.code,
          key: "AIzaSyB3lzPW5nl5Q-T6IWnX5o0Ijwr6MckM06Q",
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
    } finally {
      setLoading(false);
    }
  };

  return { translations, translateText, loading, languages };
};
