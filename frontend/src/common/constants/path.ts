// Global
export const HOME = '/';
export const API_ENDPOINT = 'api/v1';

// API
export const USERS_API = `${API_ENDPOINT}/users`;
export const LOGIN_API = `${API_ENDPOINT}/login`;
export const LOGOUT_API = `${API_ENDPOINT}/logout`;
export const LOGGEDIN_USER_API = `${API_ENDPOINT}/logged_in`;
export const ACCOUNT_ACTIVATIONS_API = `${API_ENDPOINT}/account_activations`;
export const PASSWORD_RESETS_API = `${API_ENDPOINT}/password_resets`;
export const USER_DETAIL_API = (id: number) => {
  return `${USERS_API}/${id}`;
};
export const USER_EDIT_API = (id: number) => {
  return `${USERS_API}/${id}/edit`;
};

// Page
export const LOGGEDIN_USER_REQUEST_PATH = '/logged_in';
export const SIGNUP_PATH = '/signup';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';
export const PASSWORD_RESETS_PATH = '/password-resets';
export const PASSWORD_RESETS_REQUEST_PATH = '/password_resets';
export const QUESTIONS_PATH = '/questions';
export const POST_RECIPE_PATH = '/recipes/post';
export const RECIPES_PATH = '/recipes';
export const USERS_PATH = '/users';
export const ACCOUNT_ACTIVATIONS_PATH = '/account_activations';
export const USER_DETAIL_PATH = (id: number) => {
  return `${USERS_PATH}/${id}`;
};
export const USER_EDIT_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}`;
};
export const USER_EDIT_PASSWORD_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}/password`;
};
export const FOLLOWING_REQUEST_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/following`;
};

export const FOLLOWING_PATH = (id: number) => {
  return `${USERS_PATH}/following/${id}`;
};
export const FOLLOWERS_REQUEST_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/followers`;
};
export const FOLLOWERS_PATH = (id: number) => {
  return `${USERS_PATH}/followers/${id}`;
};
export const FOLLOWING_STATUS_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/following_status`;
};
export const FOLLOW_USER_PATH = '/relationships';
export const RECIPE_DETAIL_PATH = (id: number) => {
  return `${RECIPES_PATH}/${id}`;
};
