<template>
  <div class="b">
    <Nav/>
    <div class="a">
      我是vue渲染的首页
    </div>
    
  </div>
</template>
<script>
/**
 * 版权信息
 */
import Nav from '../components/Nav';
export default {
  name: 'index',
  data() {
    return {
    }
  },
  created(){
  },

  props: [],

  components: {
    Nav
  },

  computed: {

  },

  methods: {
  }
}
</script>

<style lang="scss" scoped type="text/css">
  .b {
    background-color: #eee;
    display: block;
    height: 100px;

    .a {
      height: 50px;
      background-color: #d00000;
      color: #fff;
    }
  }
</style>
