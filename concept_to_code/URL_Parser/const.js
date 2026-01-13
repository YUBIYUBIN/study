//URL 구성 문자에서 escape 문자는 무시하고 alpha 또는 digit, safe, extra 수준만 지원한다고 가정한다
const URL_CHARSET_REGEX = /[A-Za-z0-9$-_.+!*'\(\),:\/?#@]/g;
const URL_PARSING_REGEXS = {
  scheme: /([a-zA-Z]+):\/\//,
  user: /:\/\/([A-Za-z0-9$-_.+!*'\(\),\/?#@]+)/,
  password,
  host,
  port,
  pathComponenets,
  query,
};
//  /([a-zA-Z]+)\:\/\/([A-Za-z0-9$-_.+!*'\(\),\/?#@]+):([A-Za-z0-9$-_.+!*'\(\),:\/?#]+)@([A-Za-z0-9$-_.+!*'\(\),\/?#@]+):([\d]+)\/([A-Za-z0-9$-_.+!*'\(\),:\/#@]+)\?(.+)/;

con;
module.exports = { URL_CHARSET_REGEX, URL_PARSING_REGEX };
