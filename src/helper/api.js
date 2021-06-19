import axios from 'axios';
export class Api {
  constructor() {
    this.apiUrl =
      process.NODE_ENV === 'production'
        ? process.env.REACT_APP_BACKEND_URL
        : 'http://localhost:5000';
  }

  init = () => {
    this.client = axios.create({
      baseURL: this.apiUrl + '/api',
      timeout: 31000,
      responseType: 'json',
    });
    return this.client;
  };

  getAllUrls = page => {
    return this.init().get(`/getAllUrls?page=${page}`);
  };

  submitUrl = (url, slug) => {
    return this.init().post('/createUrl', { fullUrl: url, slug: slug });
  };

  getFullUrl = url => {
    return this.init().get(url);
  };
}
