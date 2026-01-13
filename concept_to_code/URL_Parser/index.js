//1. URL 문자열을 매겨변수로 전달
//2. 정상 형태인 경우 : URL 객체 생성
//      필수 항목 누락/ URL_CHARSET 미포함 항목 있는 경우: throw 처리

const { URL_Parser } = require("./URL_parser");

const url =
  "http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2020/first/second/last?query=ab&param=12";

a = new URL_Parser(url);
b = new URL_Parser(
  "http://user_name:pass-wordboostcamp.connect-foundation.or.kr:2020/first/second/last?query=ab&param=12"
);
//console.log(a);
//url.host = "boostcamp.connect-foundation.or.kr"
//url.lastPathComponent = "last"
//url.pathComponents = ["/", "first", "second", "last"]
//url.port = 2020
//url.query = "query=ab&param=12"
//url.scheme = "http"
//url.isFileURL = false
//url.user = "user_name"
//url.password = "pass-word"
//url.absoluteString = "http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2019/first/second/last?query=ab&param=12"
