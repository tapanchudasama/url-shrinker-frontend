import axios from 'axios';
export class Api {
  constructor() {
    this.apiUrl = process.env.REACT_APP_BACKEND_URL;
  }

  init = () => {
    this.client = axios.create({
      baseURL: this.apiUrl + '/api',
      timeout: 31000,
      responseType:'json',
    });
    return this.client;
  };

  getAllUrls = () => {
    return this.init().get('/');
  };

  submitUrl = (url, slug) => {
    return this.init().post('/createUrl', { fullUrl: url, slug: slug });
  };

  getFullUrl = url => {
    return this.init().get(url);
  };
}
