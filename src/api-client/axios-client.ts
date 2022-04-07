import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { SERVICE_API } from '../constants/configs';

const request = axios.create({
  baseURL: SERVICE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  async config => {
    const accessToken: string | null = await AsyncStorage.getItem(
      'accessToken',
    );
    if (accessToken) {
      config.headers = { Authorization: `Bearer ${accessToken}` };
    }
    return config;
  },
  error => Promise.reject(error),
);

request.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default request;
