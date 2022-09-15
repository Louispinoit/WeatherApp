export default class Request {
  constructor(url) {
    this.url = url;
  }

  async fetchData() {
    const response = new Promise((res) => {
      setTimeout(() => res(fetch(this.url), 1000));
    });
    let result = await response;
    return result.json();
  }

  async getData() {
    const data = await this.fetchData();
    const hero = await data.name;
    return hero;
  }
}
