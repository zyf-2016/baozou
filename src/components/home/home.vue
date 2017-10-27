<template>
	<div class="wrapper">
    <scroll ref="scroll" class="container" :data="datalist">
      <ul>
        <li class="item" v-for="item in datalist">
          <div class="icom"> 
            <img v-lazy="item.thumbnail" alt="">
          </div>
          <div class="text">
            <p class="itemtitle">{{item.title}}</p>
            <h2 class="itemname">{{item.author_name}} | {{item.section_name}}</h2>
          </div>
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
    this.$http.get('/api/v31/documents/latest').then(res => {
      this.datalist = res.data.data
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
    top: 11.8rem
    bottom: 0
    .container
      height: 100%
      overflow: hidden
      .item
        display: flex
        border-size: border-box
        align-items: center
        padding: 1rem 1.4rem
        margin-bottom: 1rem 
        box-shadow: 0 .1rem 1rem #c7c7c7
        &:last-child
          margin-bottom: 0
          box-shadow: 0 0 .1rem  #c7c7c7
        img 
          width: 5.666rem
          height:5.666rem
          padding-right: 1rem
      .text
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        line-height: 20px
        overflow: hidden
        .itemtitle
          padding-bottom: 1rem
          font-size: 1.6rem
          color: gray 
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; 
        .itemname
          color: gray
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>