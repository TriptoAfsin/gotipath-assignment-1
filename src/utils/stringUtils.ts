export const checkPassString = (
  inputString: string,
  minChar: number
): {
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasSymbol: boolean;
  isAtleastMinChars: boolean;
} => {
  try {
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    const hasUpperCase: boolean = regexUpperCase.test(inputString);
    const hasLowerCase: boolean = regexLowerCase.test(inputString);
    const hasSymbol: boolean = regexSymbol.test(inputString);
    const isAtleastMinChars: boolean = inputString.length >= minChar;

    return {
      hasUpperCase,
      hasLowerCase,
      hasSymbol,
      isAtleastMinChars,
    };
  } catch (error) {
    console.error("Error occurred while processing the string:", error);
    return {
      hasUpperCase: false,
      hasLowerCase: false,
      hasSymbol: false,
      isAtleastMinChars: false,
    };
  }
};
