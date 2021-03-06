<template>
  <form class="form" @submit.prevent="signIn">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input
          type="email"
          placeholder="demo@email"
          class="form-control"
          v-model="userMail"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          type="password"
          placeholder="password"
          class="form-control"
          v-model="userPassword"
        />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">
        Войти
      </button>
    </div>
    <div class="form__append">
      Нет аккаунта?
      <router-link :to="{name: 'register'}" class="link">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login, formValidation } from '../data';

export default {
  name: 'LoginPage',
  data(){
    return{
      userMail: '',
      userPassword: '',
    };
  },
  methods:{
    setInitialData(){
      this.userMail='';
      this.userPassword='';
    },
    async signIn(){
      if(formValidation.bind(this)()){
        try{
          let response = await login(this.userMail,this.userPassword);
          if(response.error){
            throw new Error(response.message);
          }
          this.setInitialData();
          alert(`Здравствуйте, ${response.fullname}!`);
        }
        catch(error){
          alert(error);
        }
      }
    },
  }
};
</script>

<style scoped></style>
