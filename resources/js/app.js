/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// スクロール追従機能の実装（vue-char-scroll）
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

window.Vue = require('vue').default;

Vue.component('message', require('./components/Message.vue').default);

const app = new Vue({
  el: '#app',
  data:{
   message:'',
   chat:{
    message:[],
    user:[],
    color:[]
   }
  },
  methods:{
   send(){
    if(this.message.length !=0){
    //console.log(this.message);
     this.chat.message.push(this.message);
     this.chat.color.push('success');
     this.chat.user.push('you');
     axios.post('/send', {
      message: this.message
     })
     .then(response => {
       console.log(response);
       this.message = '';
     })
     .catch(error => {
       console.log(error);
     });
    }
   }
  },
  mounted(){
   window.Echo.private('chat')
    .listen('ChatEvent', (e) => {
     this.chat.message.push(e.message);
     this.chat.user.push(e.user);
     this.chat.color.push('warning');
     console.log(e);
    });
  }
 });
