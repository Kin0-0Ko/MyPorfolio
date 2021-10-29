<template>
	<div class="services">
		<div class="top">
			<h2 ><span class="top-underline ser-h">OUR <br> SERVICES.</span></h2>
				<div class="top-right">
					<span class="feature"> <span class="icon-br"><fa-icon class="top-icon" :icon="['fas', 'cloud']"></fa-icon></span> <span><h3 > FEATURE 1</h3></span> <span>Communicating politely with clients</span> </span>
					<span class="feature"> <span class="icon-br"><fa-icon class="top-icon" :icon="['fas', 'gavel']"></fa-icon></span> <span><h3 > FEATURE 2</h3> </span> <span> If the product does not meet the agreed terms of reference, we will refund your money </span> </span>
					<span class="feature"> <span class="icon-br"><fa-icon class="top-icon" :icon="['fas', 'bolt']"></fa-icon></span> <span><h3 > FEATURE 3</h3></span> <span> Fast execution of assigned tasks  </span> </span>
					<span class="feature"> <span class="icon-br"><fa-icon class="top-icon" :icon="['fas', 'utensils']"></fa-icon></span> <span><h3 > FEATURE 4</h3></span> <span> 
Lower prices than competitors </span> </span>
				</div>
		</div>
		<div class="stat">
			<div class="stat-items"><span><fa-icon class="top-icon" :icon="['fas', 'gift']"></fa-icon></span><span>6</span><span>Perspiciatis</span></div>
			<div class="stat-items"><span><fa-icon class="top-icon" :icon="['fas', 'comments']"></fa-icon></span><span>10</span><span>Comments</span></div>
			<div class="stat-items"><span><fa-icon class="top-icon" :icon="['fas', 'coffee']"></fa-icon></span><span>999</span><span>Coffee cups</span></div>
			<div class="stat-items"><span><fa-icon class="top-icon" :icon="['fas', 'trophy']"></fa-icon></span><span>0</span><span>Awards</span></div>
		</div>
		
	</div>
</template>
<script>

	import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';

export default {
	components: {
		FaIcon,
	}
}
</script>
<style lang="sass">
@import 'src/assets/styles/main.sass';
.main
	height: 824px

.services
	height: 100%


.stat
	color: $white
	+reg
	height: 50%
	background-color: $mainDGray
	display: flex
	justify-content: space-around
	&-items
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		width: 23%

		
		
	

.top
	height: 50%
	display: flex
	padding: 40px 0px 20px 40px
	&-right
		width: 70%
		display: flex
		flex-direction: row
		flex-wrap: wrap
		justify-content: center


	&-underline
		position: relative
	&-underline::after
		width: 120%
		display: block;
		position: absolute;
		content: "";
		height: 5px;
		background-color: $white
	h2
		margin: 0	
		width: 25%
	&-icon	
		width: 50px !important
		height: 50px


.services
	background-color: $mainRed
.ser-h	
	position: relative
	margin: 0px
	margin-bottom: 20px
	color:  $white	
	font-size: 40px
.feature
	color: $white	
	width: 50%
	span
		+reg
		h3
			+bold
.icon-br
	justify-content: center
	display: flex
	align-items: center
	margin: 20PX
	float: left
	border: solid 2px 
	border-radius: 50%
	width: 100px
	height: 100px


@media ( max-width: 1060px )
	.top
		flex-direction: column
		&-right
			margin-top: 20px
			width: 100%
	.feature
		width: 70%
	.services
		height: auto


@media ( max-width: 610px )
	.stat
		height: 50%
		justify-content: center
		align-items: center
		flex-direction: column
		&-items
			margin-top: 15px
		.services
		 	height: auto
		

</style>