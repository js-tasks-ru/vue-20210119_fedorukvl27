import Vue from './vue.esm.browser.js';

const MEETUP_ID = 6;
const API_URL = 'https://course-vue.javascript.ru/api';

export const app = new Vue({
  el: '#app',
  data(){
    return{
      defaultMeetup: null,
    };
  },
  async mounted(){
    let response = await fetch(`${API_URL}/meetups/${MEETUP_ID}`);
    let fetchedMeetup = await response.json();
    return this.defaultMeetup = ({
      ...fetchedMeetup,
      agendaItemIcons : {
        registration: 'key',
        opening: 'cal-sm',
        talk: 'tv',
        break: 'clock',
        coffee: 'coffee',
        closing: 'key',
        afterparty: 'cal-sm',
        other: 'cal-sm',
      },
      agendaItemTitles : {
        registration: 'Регистрация',
        opening: 'Открытие',
        break: 'Перерыв',
        coffee: 'Coffee Break',
        closing: 'Закрытие',
        afterparty: 'Afterparty',
        talk: 'Доклад',
        other: 'Другое',
      },
    });
  },
  computed:{
    meetup(){
      if(this.defaultMeetup){
        return ({
          ...this.defaultMeetup,
          coverStyle: this.defaultMeetup.imageId 
          ? {'--bg-url' : `url(${this.getMeetupCoverLink(this.defaultMeetup)})`} 
          : '',
          localDate: new Date(this.defaultMeetup.date).toLocaleString(navigator.language,{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
    };
    },
  },
  methods:{
    getMeetupCoverLink(meetup) {
      return `${API_URL}/images/${meetup.imageId}`;
    },
  },
});
