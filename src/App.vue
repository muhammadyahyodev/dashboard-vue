<template >

  <Header :toggleBtn="toggleMenu" />
  <main class="flex">
    <aside class="sticky z-20 top-0 w-[320px]">
      <Sidebar :toggled="toggle"/>
    </aside>

    <div class="main min-w-full h-screen mt-[78px] p-2">
      <HomeView />
    </div>

  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>

import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';
import HomeView from "./views/Home/HomeView.vue";

export default {
    name: "App",
    components: {
    Header,
    Sidebar,
    Footer,
    HomeView
  },

  data() {
    return {
      toggle: true,
    }
  },

  methods: {
    toggleMenu() {
      this.toggle = !this.toggle
    }
  }
}
</script>
<style>
  
</style>