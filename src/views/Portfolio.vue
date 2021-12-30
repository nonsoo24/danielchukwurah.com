<template>
  <div class="portfolio">
    <!-- Navbar -->
    <nav-bar></nav-bar>

    <!-- side navbar -->
    <side-navbar />
    <main>
      <!-- Project Section -->
      <section id="project">
        <div class="container">
          <h2>Portfolio</h2>

          <portfolio-item :items="sortPortfolios" />
        </div>
      </section>
    </main>

    <!-- Footer -->
    <the-footer></the-footer>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import SideNavBar from "@/components/SideNavBar.vue";
import PortfolioItem from "@/components/PortfolioItem.vue";
import { portfolios } from "../data.js";
export default {
  data() {
    return {
      portfolios,
    };
  },
  computed: {
    sortPortfolios() {
      return this.portfolios.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
  components: {
    "nav-bar": NavBar,
    "the-footer": Footer,
    "side-navbar": SideNavBar,
    "portfolio-item": PortfolioItem,
  },
};
</script>

<style src="../assets/css/Portfolio.css" scoped></style>