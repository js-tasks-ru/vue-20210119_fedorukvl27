<template>
  <form class="form">
    <form class="form" @submit.prevent="registration()">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input 
          type="email" 
          class="form-control" 
          v-model="userMail" 
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input 
          type="text" 
          class="form-control" 
          v-model="userName" 
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input 
          type="password" 
          class="form-control" 
          v-model="userPassword" 
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input 
          type="password" 
          class="form-control" 
          v-model="repeatedPassword"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox">
        <input 
          type="checkbox" 
          v-model="userAgreement"
        /> Я согласен с условиями
        <span></span>
      </label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">
        Зарегистрироваться
      </button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link :to="{name:'login'}" class="link">Войдите</router-link>
    </div>
  </form>
  </form>
</template>

<script>
import { register} from '../data';

export default {
  name: 'RegisterPage',
  data(){
    return{
      userMail:'',
      userName:'',
      userPassword:'',
      repeatedPassword:'',
      userAgreement: false,
    }
  },
  methods:{
    async registration(){
      if(!this.userMail.length){
        alert ('Требуется ввести Email');
        return false;
      }
      else if(!this.userPassword.length){
        alert('Требуется ввести пароль');
        return false;
      }
      else if(!this.userName.length){
        alert('Требуется ввести полное имя');
        return false;
      }
      else if(!this.userAgreement){
        alert('Требуется согласиться с условиями');
        return false;
      }
      else if(this.userPassword !== this.repeatedPassword){
        alert('Пароли не совпадают');
        return false;
      }
      else{
        let response = await register(this.userMail,this.userName,this.userPassword);
        if(response.error){
          alert (response.message);
          return false;
        }
        alert(response.id)
      }
    }
  },
};
</script>

<style scoped></style>
