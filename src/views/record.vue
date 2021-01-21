<template>
    <div>
            <!-- 头部  -->
    <van-nav-bar title="约课记录" />
    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="待上课"></van-tab>
      <van-tab title="已上课"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <!-- 主要区域 -->
    <section>
      <img src="@/assets/logo.png" class="zb_logo" />
      <p>请登陆后查看相关内容</p>
      <p>
        <button class="zb_btn" @click="zb_go">登陆/注册</button>
      </p>
    </section>
        <tabbar/>
    </div>
</template>

<script>
import tabbar from "./tabbar"
export default {
    data() {
        return {
active: 2
        };
    },
    created() {

    },
    components: {
      tabbar  
    },
    mounted() {

    },
    watch: {

    },
    computed: {

    },
    methods: {
         //跳转到登陆或注册页面
    zb_go(){
      this.$router.push("/login");
    }
    }
};
</script>

<style scoped>
#zb_app {
  width: 100%;
  height: 100%;
}
section {
    width: 100%;
    height: 100%;
    background: #e9eef3;
    text-align: center;
}
.zb_logo {
      margin-top: 80px;
    }
     .zb_btn {
        background: orange;
        border: 1px;
        color: white;
        border-radius: 3px;
        font-size: 13px;
        width: 80px;
        height: 25px;
        margin-top: 20px;
      }
</style>

