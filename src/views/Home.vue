<template>
<div class="home">
<h2 class="home-h"><span class="home-underline ">OUR <br> WORKS.</span></h2>
<div class="filters">
<button class="filter btn">
	All	
</button><button class=" filter btn">
	Websites
</button><button class="filter btn">
	Branding
</button>
</div>

<div class="catalog">
	<div class="catalog-item" @mouseenter="hoverOn(item.title)" @mouseleave="hoverOut(item.title)" :key="item.title"  v-for="item in items">
		<img src="#" alt="">
		<transition name="fade">
			<div v-if="item.hover" class="hover" >
			<h3 class="bold">{{item.title}}</h3>
			<span class="regular">Designed by {{item.author}}</span>
		</div>
		</transition>
	</div>
</div>


</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters('home',{items: 'all'}),
		...mapGetters('home',{tgActive: 'tgActive'})
	},
	methods:{
		...mapActions('home', {hoverOn: 'hoverOn'}),
		...mapActions('home', {hoverOut: 'hoverOut'})
	},

	
}
</script>


<style lang="sass">
@import 'src/assets/styles/main.sass';

.fade-enter-active,.fade-leave-active 

    transition: opacity .5s ease


.fade-enter-from, .fade-leave-to 
 	opacity: 0





.home
	display: flex
	justify-content: center
	align-items: ceter
	flex-direction: column
	margin: 2% 5%
	&-h
		margin: 0px
		margin-bottom: 20px
		color: $mainDGray
		font-size: 40px
	&-underline
		position: relative
	&-underline::after
		width: 120%
		display: block;
		position: absolute;
		content: "";
		height: 5px;
		background-color: $mainDGray
		
	

.catalog
	display: flex
	justify-content: center	
	flex-wrap: wrap
	width: 100%
	&-item
		display: flex
		flex-direction: column
		justify-content: flex-end
		width: 300px
		height: 300px
		background-color: $mainGray
		margin: 1%
.hover
	display: flex
	justify-content: center
	flex-direction: column
	height: 30%
	text-align: center
	background-color: #fff
	h3
		margin: 0px

		

.filters
	display: flex
	margin-bottom: 15px
	justify-content: start
.filter
		margin: 5px
.filter:hover
	background-color: $mainRed
	color: $white	
		

</style>