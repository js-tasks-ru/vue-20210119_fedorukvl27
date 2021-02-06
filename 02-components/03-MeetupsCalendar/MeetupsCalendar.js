import {getActualMonth, daysInMonth} from './data.js'

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker" v-if="meetups">
    <div class="rangepicker__calendar" >
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="changeMonth('previous')"></button>
          <div>{{actualLocaleMonth + ' ' + actualYear}}</div>
          <button class="rangepicker__selector-control-right" @click="changeMonth('next')"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
      <div class="rangepicker__cell" v-for="(day,index) in actualDayList">
        {{day.id}}
        <div v-for="meetup in formatedMeetups">
          <a v-if="day.date === meetup.date" class="rangepicker__event">{{meetup.title}}</a>
        </div>
      </div>
      </div>
    </div>
  </div>`,

  props:{
    meetups:{
      type: Array,
      required: true,
    }
  },
  data(){
    return {
      defaultDate: new Date(),
    };
  },
  computed:{
    formatedMeetups(){
      if(this.meetups){
        return this.meetups.map(meetup=>({
          ...meetup,
          date: String(new Date(meetup.date)).slice(0,15),
        }));
      }
    },
    actualLocaleMonth(){
      return getActualMonth(this.defaultDate);
    },
    actualMonth(){
      return this.defaultDate.getMonth();
    },
    actualYear(){
      return this.defaultDate.getFullYear();
    },
    actualDayList(){
      return daysInMonth(this.actualMonth,this.actualYear)
    },
  },
  methods:{
    changeMonth(value){
      if(this.defaultDate){
        switch(value){
          case "previous":
            this.defaultDate = new Date(
              this.defaultDate.setMonth(getActualMonth(this.defaultDate,value))
            );
            break;
          case "next":
            this.defaultDate = new Date(
              this.defaultDate.setMonth(getActualMonth(this.defaultDate,value))
            );
            break;
          default:
            return false;
        };
      };
    },
  },
};
