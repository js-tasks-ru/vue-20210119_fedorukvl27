<template>
<div>
    <button @click="handleClick">{{count}}</button>
</div>
</template>

<script>
export default {
    name: 'CounterButton',
    props: {
        count: {
            type: Number,
            default: 0,
        },
    },
    model:{
        prop: 'count',
        event: 'increment',
    },
    methods:{
        handleClick(){
            this.$emit('increment', this.count + 1);
        },
    }
};
</script>

<style></style>
