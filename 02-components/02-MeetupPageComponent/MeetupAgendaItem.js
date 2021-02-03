import {agendaItemTitles, agendaItemIcons} from './data.js'

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',
  template: `<div class="meetup-agenda__item" v-if="agendaItem">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="'/assets/icons/icon-' + $options.agendaItemIcons[agendaItem.type] + '.svg'" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{checkAgendaTitle()}}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{agendaItem.speaker}}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,

  props:{
    agendaItem:{
      type: Object,
      required: true,
    }
  },

  agendaItemTitles : agendaItemTitles,

  agendaItemIcons: agendaItemIcons,

  methods:{
    checkAgendaTitle(){
      return this.agendaItem.title ? this.agendaItem.title : this.$options.agendaItemTitles[this.agendaItem.type]
    }
  }
};
