<template>
  <div>


    <h2 v-if="first1">Please Search</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="third3">{{searchError}}</h2>

  <div class="row" style="width: 84%;margin-left: 8%;">
    <div class="col-xs-6 col-md-3" v-for="(user,index) in users" :key="index">
      <a :href="user.url" class="thumbnail">
        <img :src="user.img" alt="..." style="width:225px;height:225px">
      </a>
      <p>{{user.name}}</p>
    </div>

  </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
    export default {
      data(){
          return {
            first1:true,
            loading:false,
            third3:false,
            searchError:'',
            users:null

          }

      },
      mounted(){
          PubSub.subscribe('search',(msg,searchName) =>{
              const url = `https://api.github.com/search/users?q=${searchName}` //github搜索接口

              this.first1 =  false
              this.loading = true

              this.users = null   //每次搜索前清空users数据



              axios.get(url).then(response =>{    //利用axios获取url数据
                const result = response.data

                const users = result.items.map(item =>({
                    url:item.html_url,        //item.html_url为github每个用户的页面url
                    img:item.avatar_url,
                    name:item.login

                }))
                this.loading = false
                this.users = users
              })


          })

      }

    }
</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }

  div{
      margin-top: 20px;

  }


</style>
