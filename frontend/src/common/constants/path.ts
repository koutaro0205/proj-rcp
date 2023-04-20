// Global
export const HOME = '/';
export const API_ENDPOINT = 'api/v1';

/* auth */
export const LOGGEDIN_USER_REQUEST_PATH = '/logged_in';
export const SIGNUP_PATH = '/signup';
export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';

/* passwordResets */
export const PASSWORD_RESETS_PATH = '/password-resets';
export const PASSWORD_RESETS_REQUEST_PATH = '/password_resets';

/* users */
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

/* following */
export const FOLLOWING_PATH = (id: number) => {
  return `${USERS_PATH}/following/${id}`;
};
export const FOLLOWERS_REQUEST_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/followers`;
};
export const FOLLOWING_REQUEST_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/following`;
};
export const FOLLOWERS_PATH = (id: number) => {
  return `${USERS_PATH}/followers/${id}`;
};
export const FOLLOWING_STATUS_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/following_status`;
};
export const FOLLOW_USER_PATH = '/relationships';

/* accountActivations */
export const ACCOUNT_ACTIVATIONS_PATH = '/account_activations';

/* recipes */
export const POST_RECIPE_PATH = '/recipes/post';
export const RECIPES_PATH = '/recipes';
export const RECIPE_DETAIL_PATH = (id: number) => {
  return `${RECIPES_PATH}/${id}`;
};

/* questions */
export const QUESTIONS_PATH = '/questions';

/* categories */
export const CATEGORIES_PATH = '/categories';

/* favorites */
export const FAVORITE_RECIPES_PATH = `${RECIPES_PATH}/favorites`;
export const FAVORITES_REQUEST_PATH = '/favorites';
export const FAVORITE_STATUS_PATH = (id: number) => {
  return `${USERS_PATH}/${id}/favorite_status`;
};
export const FAVORITE_RECIPES_REQUEST_PATH = `${USERS_PATH}/favorite_recipes`;
