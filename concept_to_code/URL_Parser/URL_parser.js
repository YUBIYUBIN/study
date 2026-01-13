const { URL_PARSING_REGEX, URL_CHARSET_REGEX } = require("./const");
const { URL } = require("./URL");
const { getUrlValidation } = require("./validators");

class URL_Parser {
  constructor(urlStr) {
    this.urlStr = urlStr;

    this.validateURL;
    this.URL = new URL(this.urlStr.match(URL_PARSING_REGEX));
  }

  //입력 받은 URL 유호성 검사
  get validateURL() {
    if (!getUrlValidation(this.urlStr)) {
      throw new Error("URL형식에 맞지 않는 입력입니다.");
    }
  }
  get parseURL() {
    this.urlStr.match(URL_PARSING_REGEX);
  }

  get pathComponenets() {}

  get isEqual() {}
}

module.exports = { URL_Parser };
