import React from "react";

const Testfile = () => {
  const useTranslation = useTranslation("common");
  return (
    <div>
      Testfile
      {t("translationKeyOne")}
      {t("translationKeyTwo")}
      {t("commonkey")}
    </div>
  );
};

export default Testfile;
