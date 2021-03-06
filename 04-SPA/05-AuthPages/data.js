/** URL адрес API */
export const API_URL = 'https://course-vue.javascript.ru/api';

/**
 * Выполняет авторизацию по логину и паролю и возвращает результат
 * @param {string} email - email пользователя
 * @param {string} password - пароль пользователя
 * @return {Promise} - объект с данными пользователя
 */
export async function login(email, password) {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());
}

/**
 * Выполняет авторизацию по логину и паролю и возвращает результат
 * @param {string} email - email пользователя
 * @param {string} fullname - полное имя пользователя
 * @param {string} password - пароль пользователя
 * @return {Promise} - объект с данными зарегистрированного пользователя
 */
export async function register(email, fullname, password) {
  return fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, fullname, password }),
  }).then((res) => res.json());
}

export function formValidation(){
  if(!this.userMail.length){
    alert ('Требуется ввести Email');
    return false;
  }
  else if(!this.userPassword.length){
    alert('Требуется ввести пароль');
    return false;
  }
  else if(this.$options.name === 'RegisterPage' && !this.userName.length){
    alert('Требуется ввести полное имя');
    return false;
  }
  else if(this.$options.name === 'RegisterPage' && !this.userAgreement){
    alert('Требуется согласиться с условиями');
    return false;
  }
  else if(this.$options.name === 'RegisterPage' && (this.userPassword !== this.repeatedPassword)){
    alert('Пароли не совпадают');
    return false;
  }
  else{
    return true;
  }
};
