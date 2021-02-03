export const MeetupInfo = {
  template: `<ul class="info-list" v-if="organizer && place && date">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="2020-01-01">{{localDate}}</time>
      </li>
    </ul>`,

  props:{
    organizer:{
      type: String,
      required: true,
    },
    place:{
      type: String,
      required: true,
    },
    date:{
      type: Date,
      required: true,
    },
  },
  computed:{
    localDate(){
      return this.date.toLocaleString(navigator.language,{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) 
    }
  }
};
