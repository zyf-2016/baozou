<template>
	<div class="wrapper">
    <scroll ref="scroll" class="container" :data="datalist">
      <ul>
        <li class="item" v-for="item in datalist" :key="item.document_id">
          <div class="icom"> 
            <img v-lazy="item.thumbnail" alt="">
          </div>
          <div class="text">
            <p class="itemtitle">{{item.title}}</p>
            <h2 class="itemname">{{item.author_name}}</h2>
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
    this.$http.get('/api/v31/documents/contributes/latest').then(res => {
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
    width: 98%
    margin-left: 1%
    position: fixed
    top: 218px
    bottom: 0
    .container
      height: 100%
      padding-top: 8px
      overflow: hidden
      .item
        display: flex
        border-size: border-box
        align-items: center
        padding: 33px
        margin-bottom: 20px 
        // box-shadow: 0 1px #c4c4c4
        background-color: #fff
        &:last-child
          margin-bottom: 0
          // box-shadow: 0 0 1px  #c7c7c7
        img 
          width: 120px
          height:120px
          padding-right: 33px
      .text
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        overflow: hidden
        .itemtitle
          line-height: 40px /*px*/
          margin-bottom: 28px
          font-size: 36px /*px*/
          color: #1a1a1a 
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; 
        .itemname
          color: #7a7a7a
          font-size: 28px
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>