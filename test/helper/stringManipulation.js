class stringManipulation {
  capitalizeFirstLetters(string) {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  }

  capitalizeAllLetters(string) {
    return string.toUpperCase();
  }

  replaceSpacesWithUnderscores(string) {
    return string.replace(/\s/g, "_");
  }
}

export default new stringManipulation();
