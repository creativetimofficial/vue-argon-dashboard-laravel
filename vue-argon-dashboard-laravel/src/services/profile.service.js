import axios from 'axios';
import authHeader from './auth-header';
import Jsona from "jsona";

const API_URL = process.env.VUE_APP_API_BASE_URL;

const jsona = new Jsona();

async function getMe() {
  const response = await axios.get(`${API_URL}/me`, { headers: authHeader() });
  return jsona.deserialize(response.data);
}

async function updateProfile(updateUser) {

  const payload = jsona.serialize({
    stuff: updateUser,
    includeNames: []
  });

  const response = await axios.patch(`${API_URL}/me`, payload, { headers: authHeader() });
  return jsona.deserialize(response.data);
}

export default {
  getMe,
  updateProfile
};