<template>
	<div class="wrapper">
    <scroll ref="scroll" class="container" :data="datalist">
      <ul>
        <li class="item" v-for="item in datalist" :key="item.document_id">
          <video :src="item.file_url" controls :poster="item.image"></video>       
        </li>
      </ul>
      <div class="loading-container" v-show="!datalist.length">
         <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    this.$http.get('/api/v31/documents/videos/latest').then(res => {
      this.datalist = res.data.data
      console.log(this.datalist[1].image)
    }, res => {
      console.log('调用失败')
    })
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .wrapper
    width: 100%
    
    position: fixed
    top: 218px
    bottom: 0
    .container
      width: 98%
      margin-left: 1%
      height: 100%
      padding-top: 8px
      overflow: hidden
      .item
        position: relative
        border-size: border-box
        align-items: center
        width: 100%
        padding: 8px 0
        margin-bottom: 22px
        box-shadow: 0 4px 6px #c4c4c4
        background-color: #fff
        &:last-child
          margin-bottom: 0
          box-shadow: 0 4px 6px #c4c4c4
        video
          width: 100%
          height: 400px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>