export default class request {
  constructor(url) {
    this.url = url;
  }

  async fetchData() {
    const resp = await fetch(this.url);
    const respData = await resp.json();
    console.log(respData);
    return respData;
  }

  async getData() {
    const hero = await this.fetchData();
    return hero;
  }
}
