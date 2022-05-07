import en from "./en.json";
import id from "./id.json";

const getTranslations = (lang) => {
  switch (lang) {
    case "id":
      return id;
    default:
      return en;
  }
};

export { getTranslations };
