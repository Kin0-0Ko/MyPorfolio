<template>
  <div class="skils">
    <div class="skils-top">
      <div class="h ">
        <h2 class="skils-h ">
          <span class="home-underline">OUR <br />
            SKILS.</span
          >
        </h2>
      </div>
    </div>
    <div class="skils-bottom">
      <div class="skils-left">
        <div class="skils-left_p-bars">
          <div class="p-bar" v-for="bar in pBars" :key="bar">
			<ve-progress
				:progress="bar.progress"
				:line="bar.line"
				:color="bar.color"
				:thickness = "bar.thickness"
				legendClass="progB"
				:emptyColor="bar.emptyColor"
				:size="150"
            >
            </ve-progress>
		  </div>
        </div>
        <div class="skils-left_about">
          <h3 class="skils-left_about-h">About our skills</h3>
          <span
            >
			You can order a SPA, layout, business card site or multi-page site from us. They will be developed in HTML, Css (Scss or Sass), Js (Native, JQuery or Vue).
			</span
          >
        </div>
      </div>

      <div class="skils-right">
        <div v-for="boost in boosts" :key="boost">
		<div class="skils-right_item" :class="{ active: boost.active,}">		
          <fa-icon class="skils-right_item-icon" :icon="boost.icon"  :style="{color: boost.color}"/>
          <span>{{boost.h}}</span>
          <button class="skils-btn btn" @click="setActive(boost)">+</button>
			</div>
				<transition name="slide">
					<div class="desc" v-if="boost.active">
						{{boost.desc}}
					</div>
				</transition>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon as FaIcon } from "@fortawesome/vue-fontawesome";
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    FaIcon,
  },
  computed: {
	  		...mapGetters('skils', {pBars: 'all'}),
			...mapGetters('skils', {boosts: 'boosts'})
  },
  methods: {
	  ...mapMutations('skils', {setActive: 'setActive'}),
	  ...mapMutations('skils', {mark: 'markActive'})
  },
};
</script>
<style lang="sass">
@import 'src/assets/styles/main.sass'

.slide-enter-active
	opacity: 0
	height: 0px
	transition: all .5s ease;


.slide-leave-active 
	transition: all .3s ease;

.slide-leave-to
	height: 70px
	opacity: 0;


.slide-enter-to
	height: 70px
  	opacity: 0






.progB
	+bold
	color: $mainRed
	font-size: 28px

.skils
	display: flex
	flex-direction: column
	padding: 40px 40px 0px 40px
	&-bottom
		display: flex

	&-h
		margin: 0 0 20px 0
	&-btn
		border: none !important
		font-size: 20px !important

	&-left
		margin-right: 15px
		display: flex
		width: 70%
		flex-direction: column
		&_about
			margin-top: 20px
			margin-left: 20%
			span
				+reg
			&-h
				color: $mainRed
				margin: 0
				+bold
		&_p-bars
			display: flex
			justify-content: space-around

	&-right
		display: flex
		flex-direction: column
		width: 30%
		&_item
			display: flex
			margin-top: 10px
			align-items: center
			justify-content: space-around
			width: 100%
			height: 40px
			border-radius: 5px
			border: 2px solid $mainLGray
			
			span
				color: $mainGray
				+bold
			button
				color: $mainGray
				+bold
		&-icon
			path
				color: $mainRed	!important

.desc	
	+reg
	color: $mainGray
	text-align: center
	padding: 10px
.active
	span
		color: $mainRed
	button
		color: $mainRed


@media ( max-width: 1160px )
	.skils
		&-bottom
			flex-direction: column
		&-left
			width: 100%
			margin-bottom: 30px
			&_about
				margin: 0
				margin-top: 20px

		&-right
			width: 80%
			padding: 0px 10% 0px 10%

@media ( max-width: 725px )
	.skils-left_p-bars 
		display: block
		column-count: 2
		width: 100%


</style>