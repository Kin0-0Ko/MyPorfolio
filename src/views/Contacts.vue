<template>
  <div class="contacts">
    <h3 class="h">
      <span class="home-underline">
        MY <br />
        CONTACTS.
      </span>
    </h3>
    <span class="contact_icons">
      <fa-icon
        class="contact_icon"
        :icon="['fab', 'instagram']"
        style="color: red"
      />
      <fa-icon
        class="contact_icon"
        :icon="['fab', 'discord']"
        style="color: red"
      />
      <fa-icon
        class="contact_icon"
        :icon="['fab', 'github']"
        style="color: red"
      />
    </span>


    <div class="form-wrap">
      <form class="form">
        <div class="form-left">

			<div class="wrap">
				<input type="email" placeholder="Email" class="email"/>
            	<input type="text" placeholder="Name" class="name"/>
			</div>


            <div class="wrap">
				<textarea name="" id="" cols="30" rows="10"  placeholder="Massage" class="massage"></textarea>
			</div>

        </div>
		<div class="form-right">
			<div class="sub">
			<input type="submit" class="submit" value="Submit">
			<fa-icon  class="sub_icon" :icon="['fas', 'check-circle']" style="color: red"/>
			</div>
		</div>
      </form>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon as FaIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FaIcon,
  },
};
</script>


<style lang="sass">
@import 'src/assets/styles/main.sass'
.email
	width: 47.5%	
	margin-right: 5%
	height: 30px

.name
	width: 47.5%	
	height: 30px

.massage
	margin-top: 20px
	width: 100%	
	height: 80px
.wrap
	display: flex
	width: 100%

.submit
	border: none
	border-radius: 20px
	height: 78px
	width: 300px
	background-color: #fff
	color: 	$mainRed
	+reg
	

.contacts
	padding: 40px  0px  0px 40px

.contact_icon
	margin: 10px

.form
	display: flex
	flex-direction: 
	&-right
		width: 30%
		display: flex
		align-items: flex-end
		justify-content: center
	&-left
		width: 70%
.sub
	position: relative
	&_icon
		position: absolute
		top: 30px
		left: 107px



@media ( max-width: 1160px )

	.form
		flex-direction: column
		width: 100%
		&-left	
			width: 90%
			padding: 10px
			display: flex
			flex-direction: column

		&-right
			width: 100%
			justify-content: center
			margin-top: 15px

	.email
		width: 47.5%	
		margin-right: 5%
		height: 30px

	.name
		width: 47.5%	
		height: 30px

	.massage
		margin-top: 20px
		width: 100%	
		height: 80px
	.wrap
		display: flex
		width: 100%
		

</style>