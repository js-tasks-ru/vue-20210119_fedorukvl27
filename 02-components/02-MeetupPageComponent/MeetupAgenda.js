import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda" v-if="agenda">
      <div class="meetup-agenda__item" v-for="agendaItem in agenda">
        <meetup-agenda-item :agendaItem="agendaItem" :key="agendaItem.id"></meetup-agenda-item>
      </div>
    </div>`,

  components:{
    MeetupAgendaItem,
  },

  props:{
    agenda:{
      type: Array,
      required: true,
    }
  }
};
