<template>
<div>
<li class="list-group-item" :class="className"><slot></slot></li>
<small class="float-right" :class="className">{{user}}</small>
</div>
</template>

<script>
 export default {
  props:{
   'color':{},
   'user':{}
  },
  mounted() {
   console.log('Component mounted.')
  }
 }
</script>
