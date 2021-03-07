<template>
  <button @click="handleClick">{{count_}}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  props:{
    count:{
      type: Number,
      default: 0,
    },
  },
  data(){
    return{
      count_: this.count,
    }
  },
  watch:{
    count(newValue){
      this.count_ = newValue;
    },
  },
  methods:{
    handleClick(){
      this.$emit('increment', this.count_ +=1);
    }
  }
};
</script>

<style>

</style>
