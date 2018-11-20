<template>
    <div style="margin-top:80px;margin-left:400px">
      <p style="font-size: 27px">Search GitHub User</p>
      <input type="text" name="" placeholder="请输入搜索关键" v-model="name" style="line-height: 2">
      <button @click="search" style="width: 58px;height: 31px;">Search</button>
    </div>

</template>

<script>
    import PubSub from 'pubsub-js'
    export default {
      data (){
          return {
              name:''

          }

      },
      methods:{
          search(){
            const name = this.name.trim()
            if (name){
              PubSub.publish('search',name)

            }

          }

      }

    }

</script>

<style>


</style>
