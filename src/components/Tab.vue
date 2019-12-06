<template>
  <div class="tab">
	  <router-link tag="span" to="/home">首页</router-link>
	  <router-link tag="span" to="/my">我的</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.tab{
		width: 100%;
		height: 40px;
		background: #ccc;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 18px;

		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		span.router-link-active{
			color: red;
		}
	}

</style>