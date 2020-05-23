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
          <div class="row">
            <div class="col-md-6 col-sm">
              <h1 class="pb-4">DANIEL CHUKWURAH</h1>
              <p>
                Hi, I'm <strong>Daniel Nonso Chukwurah</strong>, but fondly called <b>Nonso.</b>
              </p>
              <p class="pt-2"> I'm a Software Engineer based in Lagos, Nigeria. I am
                passionate about
                building scalable web applications and software with good user experience and accessibility that meets
                business goals.
                </p>
              <div class="social-media pt-4">
                <p class="text-sm"> <u> Say hi</u></p>
                <a v-for="(socialMedia, i) in socialMediaHandles" :key="i" :href=socialMedia.link>
                  <span :class=socialMedia.class></span>
                </a>
              </div>

            </div>
            <div class="col-md-6 col-sm">
              <figure>
                <img src="../assets/Img/DanielChukwurah.jpg" alt="DanielChukwurah">
              </figure>
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
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  import SideNavBar from '@/components/SideNavBar.vue'
 
  import {socialMediaList} from '@/components/Data/Project.js'
  // import {certificationList} from '@/components/Api/Project.js'
export default {
  data() {
      return {
        //projects: [],
        socialMediaHandles: [],
        // certifications: []
        languages: ['HTML', 'CSS', 'Javascript (ES6)', 'SQL', 'Python'],
        frameworks: ['Vue', 'Vuetify', 'Node', '.Net'],
        databases: ['MSSQL', 'MongoDB'],
        tools: ['Azure DevOps', 'Bash', 'Git & Github', 'Netlify', 'Heroku', 'Chrome DevTools']
      }
    },

    components: {
      'nav-bar': NavBar,
      'the-footer': Footer,
      'side-navbar':SideNavBar
    },

    created() {
      // projectList.forEach(project => {
      //     this.projects.push(project);
      // })

      socialMediaList.forEach(socialMedia => {
          this.socialMediaHandles.push(socialMedia);
      })

      // certificationList.forEach(certification => {
      //     this.certifications.push(certification);
      // })
    }
  }

</script>

<style src="../assets/css/Home.css" scoped></style>