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
      meetup: null,
    }
  },

  async mounted(){
    try{
      this.meetup = await fetchMeetup(MEETUP_ID);
    }catch(e){
      console.log(e);
    }
  },

};
