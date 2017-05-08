export default class Store {
  constructor() {
    this.data = {};   //页面数据
    this.changeList = [];
  }
  setItem(url,data){
    this.data[url] = data;
  }
  getItem(url){
    return this.data[url];
  }
  getUrl ({ path, query }) {
    var q = [];
    Object.keys(query).forEach((v) => q.push(`${v}=${query[v]}`));
    return [path, q.join('&')].join('?');
  }
}
