const { URL_CHARSET_REGEX, URL_PARSING_REGEX } = require("./const");

const url =
  "http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2020/first/second/last?query=ab&param=12";

//URL_CHARSET_REGEX에 미포함된 문자가 들어가있는 경우 또는 필요항목이 없는 경우 : return false
const getUrlValidation = (urlStr) => {
  if (
    urlStr.length !== urlStr.match(URL_CHARSET_REGEX, "g").length ||
    !urlStr.match(URL_PARSING_REGEX)
  ) {
    return false;
  }
  return true;
};

module.exports = { getUrlValidation };
