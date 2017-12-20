<template>
  <div class="b">
      <Nav/>
    我是vue渲染的列表
  </div>
</template>
<script>
/**
 * 版权信息
 */
import Nav from '../components/Nav';
export default {
  name: 'list',
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

<style scoped>

</style>
