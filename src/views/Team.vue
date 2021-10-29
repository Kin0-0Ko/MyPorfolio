<template>
  <div class="team">
    <h2>
      <span class="home-underline h">
		  ME.
      </span>
    </h2> 

    <div class="teammates" >

      <div class="card " @mouseenter="hoverOn(people.name)" @mouseleave="hoverOut(people.name)"  v-for="people in teammates" :key="people">

        <div class="card_top" >
          <div class="card_top-avatar">
            <img class="img" src="@/assets/avatar.png" alt="" >
          </div>

		<transition name="rotate">
			<div v-if="people.hover" class="card_top-icons">
           		<span class="icons inst"> <a class="icons_img" :href="people.inst"><fa-icon class="icon" :icon="['fab', 'instagram']" style="color:white"/></a></span>
            	<span class="icons twtr"><a class="icons_img" :href="people.twtr"><fa-icon class="icon" :icon="['fab', 'facebook']" style="color:white"/></a></span>
            	<span class="icons git"><a class="icons_img" :href="people.git"><fa-icon class="icon" :icon="['fab', 'github']" style="color:white"/></a></span>
          </div>
		</transition>

        </div>
		
        <div class="card_bottom ">
          <h3 class="card_bottom-name">{{people.name}}</h3>
          <span class="card_bottom-post">{{people.post}}</span>
          <span class="card_bottom-about">{{people.about}}</span>
        </div>

      </div>


	  

    </div>
  </div>
</template>




<script>
	import {mapGetters, mapActions} from 'vuex';
	import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';
export default {
	components:{
		FaIcon
	},
	computed: {
		...mapGetters('team', {teammates: 'teammates'})
	},
	methods: {
		...mapActions('team', {hoverOn: 'hoverOn'}),
		...mapActions('team', {hoverOut: 'hoverOut'})
	},


};
</script>



<style lang="sass">
@import 'src/assets/styles/main.sass'

.rotate-enter-active
	transform: translateX(-30px)
	transition: all .8s ease;


.rotate-leave-active 
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.rotate-leave-to
	transform: translateX(30px);
	opacity: 0;


.rotate-enter-to
	transform: translateX(0px)
  	opacity: 0


	
.img
	width: 100%
	height: 100%



.icons
	display: flex
	justify-content: center
	align-items: center
	&_img
		width: 100%
		height: 100%
		display: flex
		justify-content: center
		align-items: center
.icon
	width: 30px !important
	height: 30px


.team
	display: flex
	justify-content: center
	align-items: ceter
	flex-direction: column
	margin: 2% 5%

.h
	margin: 0px
	margin-bottom: 20px
	color: $mainDGray
	font-size: 40px

.teammates
	display: flex
	justify-content: center
	flex-wrap: wrap
	width: 100%
.card
	display: flex
	flex-direction: column
	width: 350px
	height: 450px
	margin: 1%
	background-color: #fff	
	border-radius: 30px
	box-shadow: 0px 10px 20px 1px $mainGray;
	&_top
		+reg
		padding: 5px
		height: 40%
		display: flex
		align-items: center
		&-avatar
			height: 130px
			width: 130px
			border-radius: 100%
			// background-color: $mainLGray
			// background-image: url(../assets/avatar.png)
		&-icons
			margin-left: -35px
			display: flex
			width: 200px
			height: 65px
			span
				margin: 10px
				background-color: $mainRed
				border-radius: 50%
				width: 40px
				height: 40px
	&_bottom
		line-height: 1.5
		height: 60%
		margin-left: 120px
		margin-right: 10px
		display: flex
		flex-direction: column
		&-name	
			margin: 15px 0 0 0 
			+bold
			color: $mainRed
		&-post	
			margin-bottom: 15px
			color: $mainGray
			+bold
		&-about	
			+reg
			font-size: 18px


</style>