import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup, getMeetupCoverLink } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<div v-if="meetup"><meetup-view :meetup="meetup"></meetup-view></div>`,

  components:{
    MeetupView,
  },

  data(){
    return{
      defaultMeetup: null,
      defaultMeetupCoverLink: '',
    }
  },

  async mounted(){
    try{
      this.defaultMeetup = await fetchMeetup(MEETUP_ID);
    }catch(e){
      console.log(e);
    }
    this.defaultMeetupCoverLink = getMeetupCoverLink(this.defaultMeetup);
  },

  computed:{
    meetup(){
      if(this.defaultMeetup){
        return ({
          ...this.defaultMeetup,
          link: this.defaultMeetupCoverLink,
          date: new Date(this.defaultMeetup.date),
        })
      }
    },
  },

};
