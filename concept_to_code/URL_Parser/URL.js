class URL {
  constructor([
    absoluteStr,
    scheme,
    user,
    password,
    host,
    port,
    pathComponenets,
    query,
  ]) {
    this.absoluteStr = absoluteStr;
    this.scheme = scheme;
    this.user = user;
    this.password = password;
    this.host = host;
    this.port = port;
    this._pathComponenets = pathComponenets;
    //this.lastPathComponent = lastPathComponent;
    this.query = query;
  }
}

module.exports = { URL };
