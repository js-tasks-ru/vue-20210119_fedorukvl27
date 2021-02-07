export const CounterButton = {
  template: '<button type="button" @click="handleIncrement">{{count}}</button>',
  
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
    handleIncrement(){
      this.$emit('increment', this.count+1)
    }
  }
};
