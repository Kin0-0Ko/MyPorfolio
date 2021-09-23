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
	<div class="catalog-item" :class="item.class" @mouseenter="hoverOn(item.title)" @mouseleave="hoverOut(item.title)" :key="item.title"  v-for="item  in items">
		<!-- <img class="" src="@/assets/first.png" alt=""> -->
		<transition name="fade">
			<div v-if="item.hover" class="hover" >
			<h3 class="bold"><a :href="item.a" class="bold home_a" target="_blank">{{item.title}}</a></h3>
			<span class="regular">Develop by {{item.author}}</span>
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
	&_a
		color: #000
		+bold
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
		border-radius: 10px
		display: flex
		flex-direction: column
		justify-content: flex-end
		width: 350px
		height: 300px
		background-color: $mainGray
		margin: 2%
		box-shadow: 0px 10px 20px 1px $mainGray;

.hover
	border-radius: 0px 0px 10px 10px
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
		
.first
	background-image: url(../assets/first.png)
	background-size: 350px 300px
	// background-position: 50% 50%
	background-repeat: no-repeat
.two
	background-image: url(../assets/two.png)
	background-size: 350px 400px
	// background-position: center
	background-repeat: no-repeat
.three
	background-image: url(../assets/three.png)
	background-size: 450px 300px
	// background-position: cover	
	background-repeat: no-repeat
.four
	background-image: url(../assets/Blog_kinko.png)
	background-size: 1100px 500px
	background-position: 50% 50%
	// background-repeat: no-repeat
	// ackground-position: cover	




</style>