<template>
   <div class="list">
      <div class="item" v-for="item in list" :key="item.id">
        {{item.title}}
      </div>
    </div>
</template>

<script>
export default {
	name:"list",
	props:["list"]

}
</script>

<style lang="scss" >
	.list{
		width: 100%;
		height: 120px;
		background: #eee;
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
		.item{
			width: 23%;
			line-height: 60px;
			text-align: center;
		}
	}

</style>