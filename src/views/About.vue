<template>
  <div class="about">
    <!-- Navbar -->
    <nav-bar></nav-bar>

    <!-- side navbar -->
    <side-navbar />

    <!-- About Section -->
    <section id="about-section">
      <div class="container pt-4">
        <h2>About</h2>
        <div class="row">
          <div class="col-md-6">
            <p>
              I currently work as a Web and Mobile Developer at Afrinvest West Africa Limited were I build enterprise web and mobile
              solutions together with an amazing agile team for users for diverse users.
            </p>

            <p class="d-none">
              I enjoy bridging the gap between engineering and design - combining state-of-the-art
              technical knowledge with a keen eye for design to create a most beautiful product and
              services.
            </p>

            <p>
              As a Frontend Developer, I'm passionate about building softwares that are scalable, accessible, have
              good user experience, and test driven.
            </p>

            <p>
              When I'm not coding you can find me surfing the internet, playing or watching football,
              playing video games, or hanging out with friends and family.
            </p>
          </div>

          <div class="col-md-6">
            <figure>
              <img src="../../src/assets/Img/Dan-Chuks.webp" alt="nonso-picture" width="" />
            </figure>
          </div>
        </div>
      </div>
      <!-- certifications -->
      <!-- <h5>Certifications</h5>
          <ul class="certification-list">
            <li v-for="(certification, i) in certifications" :key="i">
              <a :href= certification.link> <span class="ti-control-forward mr-3"></span> {{certification.name}}</a>
            </li>
      </ul>-->
      <!-- </div> -->
      <!-- <p>writing clean codes to the best of my ability. I also enjoy learning new technologies.</p> -->
    </section>

    <the-footer />
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import SideNavBar from "@/components/SideNavBar.vue";
export default {
  data() {
    return {
      //projects: [],
    };
  },
  components: {
    "nav-bar": NavBar,
    "the-footer": Footer,
    "side-navbar": SideNavBar,
  },
};
</script>

<style src="../assets/css/About.css" scoped></style>