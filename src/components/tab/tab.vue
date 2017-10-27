<template>
	<div class="wrap">
		<router-link tag='div' class="item" to='/home'>首页</router-link>
		<router-link tag='div' class="item" to='/user'>用户投稿</router-link>
		<router-link tag='div' class="item" to='/video'>视频</router-link>
	</div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.wrap
		display: flex
		height: 3.9rem
		line-height: 3.9rem
		font-size: 1.5rem
		box-shadow: 0 .2rem .4rem #c7c7c7 
		.item
			flex: 1
			text-align: center
			color: #fb3d4f
			&.router-link-active
				border-bottom: 1px solid #fb3d4f
</style>