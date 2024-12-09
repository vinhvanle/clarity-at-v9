import stringManipulation from "./stringManipulation";

export default {
  findInputByLabel: async function (label) {
    label = stringManipulation
      .setString(label)
      .capitalizeFirstLetters()
      .removeSpaces()
      .toString();

    const inputLabel = await $(
      `//div[contains(@id,'${label}') and contains(@class,'input_container')]//label`
    ).getText();
    if (label.includes(inputLabel)) {
      const inputField = await $(
        `//div[contains(@id,'${label}') and contains(@class,'input_container')]//input`
      );
      return inputField;
    } else {
      throw new Error(`No input found with label: ${label}`);
    }
  },
};
