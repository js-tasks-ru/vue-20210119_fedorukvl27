import Vue from './vue.esm.browser.js';

const app = new Vue({
    template: '#app',
    data(){
        return {
            count: 0,
        };
    },
    methods:{
        handleCounter(){
            this.count += 1;
        },
    },
});

app.$mount('#app');
// Рекомендуется использовать МЕТОД в качестве обработчика события
