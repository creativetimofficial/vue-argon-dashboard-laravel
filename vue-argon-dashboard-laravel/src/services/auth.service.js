import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_BASE_URL;

const headers = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
};

async function login(user) {
  const response = await axios.post(API_URL + '/login',
    {
      email: user.email,
      password: user.password
    }, { headers });

  if (response.data.access_token) {
    localStorage.setItem('access_token', response.data.access_token);
  }
  return response.data;
}

async function logout() {
  try {
    await axios.post(API_URL + '/logout', {}, { headers: authHeader() });
  } finally {
    localStorage.removeItem('access_token');
  }
}

async function register(user) {

  const response = await axios.post(API_URL + '/register',
    {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.confirm_password,
    }, { headers });

  if (response.data.access_token) {
    localStorage.setItem('access_token', response.data.access_token);
  }
  return response.data;
}

async function forgotPassword(data) {
  const response = await axios.post(API_URL + '/password-forgot',
    {
      email: data.email,
      redirect_url: data.redirect_url
    }, { headers });

  return response.data;
}

async function resetPassword(data) {
  const response = await axios.post(API_URL + '/password-reset',
    {
      password: data.password,
      password_confirmation: data.password_confirmation,
      email: data.email,
      token: data.token
    }, { headers });

  return response.data;
}

export default {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword
};