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
export const SIGNUP_PATH = '/signup';
export const LOGIN_PATH = '/login';
export const PASSWORD_RESETS_PATH = '/password-resets';
export const QUESTIONS_PATH = '/questions';
export const POST_RECIPE_PATH = '/recipes/new';
export const USERS_PATH = '/users';
export const USER_DETAIL_PATH = (id: number) => {
  return `${USERS_PATH}/${id}`;
};
export const USER_EDIT_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}`;
};
export const USER_EDIT_PASSWORD_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}/password`;
};
export const USER_EDIT_EMAIL_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}/email`;
};
export const USER_EDIT_USER_NAME_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}/username`;
};
export const USER_EDIT_USER_IMAGE_PATH = (id: number) => {
  return `${USERS_PATH}/edit/${id}/image`;
};
