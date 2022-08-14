<template>
    <div>
        <li class="list-group-item"><slot></slot></li>
        <small class="float-right">{{user}}</small>
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
