<template>
  <div class="home">
    <!-- Navbar -->
    <nav-bar></nav-bar>

    <!-- side navbar -->
    <side-navbar />
    <main>
      <!-- Introduction Section -->
      <Section id="intro">
        <div class="container">
          <!-- <h1>Hello! 👋</h1> -->
          <div class="home-image">
            <figure>
              <img src="../assets/Img/Daniel-Chukwurah.webp" alt="Daniel Chukwurah picture" />
            </figure>
          </div>

          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h1>DANIEL CHUKWURAH</h1>
              <p>
                Hi, I'm
                <strong>Daniel Nonso Chukwurah</strong>, but fondly called
                <b>Nonso.</b>
              </p>
              <p class="pt-2">
                I'm a Frontend Developer based in Lagos, Nigeria. I am
                passionate about
                building scalable web and mobile applications with good user and accessibility experience that solves business problems and transform lives
              </p>
              <div class="social-media pt-4">
                <div class="d-flex">
                  <!-- <p class="text-sm">
                    <u>Say hi</u>
                  </p>-->

                  <p class="text-sm">
                    <a
                      class="text-sm link"
                      href="https://calendly.com/daniel-chukwurah"
                      target="_blank"
                    >Book a session</a>
                  </p>
                </div>

                <a
                  v-for="(socialMedia, i) in socialMediaHandles"
                  :key="i"
                  :href="socialMedia.link"
                  :aria-label="socialMedia.label"
                >
                  <span :class="socialMedia.class"></span>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 d-none d-sm-block" background-image>
              <!-- <figure>
                <img src="../assets/Img/DanielChukwurah.jpg" alt="DanielChukwurah">
              </figure>-->
            </div>
          </div>
        </div>
      </Section>
    </main>

    <!-- Footer -->
    <the-footer></the-footer>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import SideNavBar from "@/components/SideNavBar.vue";
import { socialMediaHandles } from "../data.js";

export default {
  data() {
    return {
      socialMediaHandles,
      languages: ["HTML", "CSS", "Javascript (ES6)", "SQL", "Python"],
      frameworks: ["Vue", "Vuetify", "Node", ".Net"],
      databases: ["MSSQL", "MongoDB"],
      tools: [
        "Azure DevOps",
        "Bash",
        "Git & Github",
        "Netlify",
        "Heroku",
        "Chrome DevTools",
      ],
    };
  },

  components: {
    "nav-bar": NavBar,
    "the-footer": Footer,
    "side-navbar": SideNavBar,
  },
};
</script>

<style src="../assets/css/Home.css" scoped></style>