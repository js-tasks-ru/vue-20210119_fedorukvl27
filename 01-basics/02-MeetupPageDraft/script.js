import Vue from './vue.esm.browser.js';

const MEETUP_ID = 6;
const API_URL = 'https://course-vue.javascript.ru/api';

export const app = new Vue({
  el: '#app',
  data(){
    return{
      defaultMeetups: [],
    };
  },
  async mounted(){
    let response = await fetch(`${API_URL}/meetups/${MEETUP_ID}`);
    let fetchedMeetup = await response.json();
    this.defaultMeetups.push(fetchedMeetup);
    console.log(this.meetups)
  },
  computed:{
    meetups(){
      return this.defaultMeetups.map((meetup)=>({
        ...meetup,
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
        coverStyle: meetup.imageId 
        ? {'--bg-url' : `url(${this.getMeetupCoverLink(meetup)})`} 
        : '',
        localDate: new Date(meetup.date).toLocaleString(navigator.language,{
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }))
    }
  },
  methods:{
    getMeetupCoverLink(meetup) {
      return `${API_URL}/images/${meetup.imageId}`;
    },
  },
});
