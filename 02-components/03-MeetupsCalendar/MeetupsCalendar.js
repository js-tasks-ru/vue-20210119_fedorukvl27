import {getActualMonth, getDaysInMonth} from './data.js'

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar" >
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="changeMonth('previous')"></button>
          <div>{{actualLocaleMonth + ' ' + actualYear}}</div>
          <button class="rangepicker__selector-control-right" @click="changeMonth('next')"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
      <div :class="(day.isPreviousMonth || day.isNextMonth) ? 'rangepicker__cell rangepicker__cell_inactive' : 'rangepicker__cell' " v-for="(day,index) in meetupsInMonthList">
        {{day.id}}
        <div v-for="meetup in day.meetupsToday">
          <a class="rangepicker__event">{{meetup.title}}</a>
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
    formatedMeetupsList(){
      return this.meetups.map(meetup=>({
        ...meetup,
        date: new Date(meetup.date).toISOString().slice(0,10),
      }));
    },
    meetupsInMonthList(){
      for(let x=0;x<this.actualDaysInMonthList.length;x++){
        this.actualDaysInMonthList[x].meetupsToday=[];
        for(let i=0;i<=this.formatedMeetupsList.length;i++){
          if(this.formatedMeetupsList[i] && this.actualDaysInMonthList[x].date === this.formatedMeetupsList[i].date){
            this.actualDaysInMonthList[x].meetupsToday.push(this.formatedMeetupsList[i]);
          }
        }
      }
      return this.actualDaysInMonthList;
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
    actualDaysInMonthList(){
      return getDaysInMonth(this.actualMonth,this.actualYear)
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
