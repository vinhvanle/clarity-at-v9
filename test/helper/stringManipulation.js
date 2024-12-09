class stringManipulation {
  constructor() {
    this.value = "";
  }

  setString(string) {
    this.value = string;
    return this;
  }

  capitalizeFirstLetters(string) {
    if (string) {
      this.value = string.replace(/\b\w/g, (char) => char.toUpperCase());
    } else {
      this.value = this.value.replace(/\b\w/g, (char) => char.toUpperCase());
    }
    return this;
  }

  capitalizeAllLetters(string) {
    if (string) {
      this.value = string.toUpperCase();
    } else {
      this.value = this.value.toUpperCase();
    }
    return this;
  }

  replaceSpacesWithUnderscores(string) {
    if (string) {
      this.value = string.replace(/\s/g, "_");
    } else {
      this.value = this.value.replace(/\s/g, "_");
    }
    return this;
  }

  removeSpaces(string) {
    if (string) {
      this.value = string.replace(/\s/g, "");
    } else {
      this.value = this.value.replace(/\s/g, "");
    }
    return this;
  }

  toString() {
    return this.value;
  }
}

export default new stringManipulation();
