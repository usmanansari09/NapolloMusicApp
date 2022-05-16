import {
  CREATE_ALBUM_FAIL,
  CREATE_ALBUM_LOADING,
  CREATE_ALBUM_SUCCESS,
  GET_ALBUM_DETAILS_FAIL,
  GET_ALBUM_DETAILS_LOADING,
  GET_ALBUM_DETAILS_SUCCESS,
  GET_ALL_USER_ALBUM_FAIL,
  GET_ALL_USER_ALBUM_LOADING,
  GET_ALL_USER_ALBUM_SUCCESS,
  DELETE_ALBUM_SUCCESS,
  DELETE_ALBUM_FAIL,
  DELETE_ALBUM_LOADING,
  CLEAR_ALBUM_ERROR,
  CLEAR_ALBUM_FORM,
  CLEAR_ALL_USER_ALBUM_ON_LOGOUT,
  UPDATE_ALBUM_DETAILS_FAIL,
  UPDATE_ALBUM_DETAILS_LOADING,
  UPDATE_ALBUM_DETAILS_SUCCESS,
  CLEAR_UPDATE_ALBUM_DETAILS,
  STORE_ACTIVE_ALBUM_DETAILS,
} from '../../../constants/index';

export const createAlbumReducer = (
  state = {loading: false, error: '', status: false, message: ''},
  {type, payload},
) => {
  switch (type) {
    case CREATE_ALBUM_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CREATE_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        status: payload.responseStatus,
        message: payload.responseDescription,
      };
    case CREATE_ALBUM_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        status: false,
        message: '',
      };
    case CLEAR_ALBUM_FORM:
      return {
        ...state,
        error: '',
        status: false,
        message: '',
      };

    default:
      return state;
  }
};

export const updateAlbumDetailsReducer = (
  state = {loading: false, error: '', status: false, message: ''},
  {type, payload},
) => {
  switch (type) {
    case UPDATE_ALBUM_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case UPDATE_ALBUM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        status: payload.responseStatus,
        message: payload.responseDescription,
      };
    case UPDATE_ALBUM_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
        status: false,
        message: '',
      };
    case CLEAR_UPDATE_ALBUM_DETAILS:
      return {
        ...state,
        status: false,
        message: '',
        error: '',
      };

    default:
      return state;
  }
};

export const deleteAlbumReducer = (
  state = {loading: false, error: '', status: null, message: ''},
  {type, payload},
) => {
  switch (type) {
    case DELETE_ALBUM_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
        message: '',
      };
    case DELETE_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        status: payload.responseStatus,
        message: payload.responseDescription,
      };
    case DELETE_ALBUM_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
        status: null,
        message: '',
      };

    default:
      return state;
  }
};

export const getAlbumDetailsReducer = (
  state = {loading: false, error: '', data: {}},
  {type, payload},
) => {
  switch (type) {
    case GET_ALBUM_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
        data: {},
      };
    case GET_ALBUM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: payload.responseBody,
      };
    case GET_ALBUM_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
        data: {},
      };

    default:
      return state;
  }
};

export const getAllUserAlbumReducer = (
  state = {loading: false, error: '', data: []},
  {type, payload},
) => {
  switch (type) {
    case GET_ALL_USER_ALBUM_LOADING:
      return {
        ...state,
        loading: true,
        error: '',
        data: [],
      };
    case GET_ALL_USER_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: payload,
      };
    case GET_ALL_USER_ALBUM_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        data: [],
      };
    case CLEAR_ALL_USER_ALBUM_ON_LOGOUT:
      return {
        ...state,
        loading: false,
        error: '',
        data: [],
      };

    default:
      return state;
  }
};

export const storeActiveAlbumDetailsReducer = (
  state = {
    name: '',
    description: '',
    year: '',
    id: '',
    owner: '',
    url: '',
  },
  {type, payload},
) => {
  switch (type) {
    case STORE_ACTIVE_ALBUM_DETAILS:
      return {
        ...state,
        name: payload.name,
        description: payload.description,
        year: payload.year,
        id: payload.id,
        owner: payload.owner,
        url: payload.url,
      };

    default:
      return state;
  }
};
