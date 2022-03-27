<template>
  <div class="nav">
    <ul class="ul-nav">
      <router-link
        v-for="item in menu"
        :key="item.route"
        :to="{ name: item.route }"
        v-slot="{ route, isExactActive, navigate }"
      >
        <li class="nav-item">
          <a
            class="underline"
            :class="isExactActive ? 'active' : ''"
            :href="route.fullPath"
            @click="navigate"
            >{{ item.title }}</a
          >
        </li>
      </router-link>
    </ul>
  </div>

  <div class="main">
    <transition name="page"> <router-view></router-view> </transition>
  </div>
</template>



<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    menu: [
      { route: "Home", title: "Home" },
      { route: "Skils", title: "Skils" },
      { route: "Services", title: "Services" },
      { route: "Team", title: "Team" },
    //   { route: 'Contacts', title: 'Contacts'}
    ],
  }),
};
</script>



<style lang="sass">
@import 'src/assets/styles/main.sass'
.page-enter-active,.page-leave-active

	transition: all .7s ease

.page-enter-from, .page-leave-to
	opacity: 0
	transform: translate(-5%, 0)

.ul-nav
	list-style: none
	display: flex
	flex-direction: row
	justify-content: center
	background-color: $mainDGray
	margin: 0

.nav-item
	padding: 17px
a
	position: relative
</style>
