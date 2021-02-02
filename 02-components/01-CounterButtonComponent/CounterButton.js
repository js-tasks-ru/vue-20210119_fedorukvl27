export const CounterButton = {
  template: '<button type="button" :value="count" @click="handleIncrement">{{count}}</button>',
  
  props:{
    count:{
      type: Number,
      default: 0,
    }
  },

  model:{
    prop: 'count',
    event: 'increment',
  },

  methods:{
    handleIncrement(event){
      this.$emit('increment', ++event.target.value)
    }
  }
};
