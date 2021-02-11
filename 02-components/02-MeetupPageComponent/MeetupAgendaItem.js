import {agendaItemTitles, agendaItemIcons} from './data.js'

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',
  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="'/assets/icons/icon-' + $options.agendaItemIcons[filteredAgendaItem.type] + '.svg'" />
      </div>
      <div class="meetup-agenda__item-col">{{filteredAgendaItem.startsAt}} - {{filteredAgendaItem.endsAt}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{filteredAgendaItem.title}}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{filteredAgendaItem.speaker}}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{filteredAgendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{filteredAgendaItem.description}}</p>
      </div>
    </div>`,

  props:{
    agendaItem:{
      type: Object,
      required: true,
    }
  },
  computed:{
    filteredAgendaItem(){
      return {
        ...this.agendaItem,
        title: this.agendaItem.title ? this.agendaItem.title : this.$options.agendaItemTitles[this.agendaItem.type],
      }
    },
  },

  agendaItemTitles : agendaItemTitles,

  agendaItemIcons: agendaItemIcons,

};
