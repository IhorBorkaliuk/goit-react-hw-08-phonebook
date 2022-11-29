import axios from 'axios';
import Notiflix from 'notiflix';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthUser = token => {
  axios.defaults.headers.common.Authorization = `${token}`;
};

const clearAuthUser = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);
      setAuthUser(response.data.token);
      return response.data;
    } catch (error) {
        Notiflix.Notify.warning(
          'Please, enter the correct value of email and password!'
        );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthUser(response.data.token);
      return response.data;
    } catch (error) {
              Notiflix.Notify.warning(
                'Please, check entered email or password!'
              );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthUser();
    } catch (error) {
    Notiflix.Notify.warning('Oops, something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk('users/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.users.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  try {
    setAuthUser(persistedToken);
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});