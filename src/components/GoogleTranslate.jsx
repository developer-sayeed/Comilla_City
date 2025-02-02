import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          {pageLanguage: 'en', includedLanguages: 'en,bn,hi,ar', autoDisplay: false},
          'google_translate_element'
        );
      }
    `;
    document.body.appendChild(script);

    // Ensure default language is English
    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = "en"; // Force default language to English
        select.dispatchEvent(new Event("change")); // Trigger change event
      }
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Select Language:</h2>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
