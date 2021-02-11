import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',

  template: `
    <div>
      <meetup-cover :link="coverLink" :title="meetup.title"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :place="meetup.place" :organizer="meetup.organizer" :date="new Date(meetup.date)"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,

  components:{
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupCover,
    MeetupInfo,
  },

  props:{
    meetup:{
      type: Object,
      required: true,
    }
  },
  
  computed:{
    coverLink(){
      return getMeetupCoverLink(this.meetup);
    }
  }
};
