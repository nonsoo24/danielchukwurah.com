<template>
  <div class="home">
    <!-- Navbar -->
    <nav-bar></nav-bar>

    <!-- side navbar -->
        <side-navbar />
    <main>

      <!-- Introduction Section -->
      <Section id="section-intro">
        <div class="container mb-5">
          <h1>Hello! 👋</h1>
          <p>
            I'm <strong>Daniel Nonso Chukwurah</strong>,<br> A Software Engineer based in Lagos, Nigeria. I am passionate about
            building scalable web applications and softwares with good user experience and accessibility that meets business goals.
          </p>
        <div class="social-media mt-5 pb-5">
          <a v-for="(socialMedia, i) in socialMediaHandles" :key="i" :href=socialMedia.link>
            <span :class=socialMedia.class></span>
          </a>
        </div>

          <!-- <div class="text-left">
            <button @click="getInTouch()" class="btn btn-primary box bounce">Get in Touch</button>
          </div> -->

          <!-- <p>
            I'm passionate about building softwares with good user experience, good designs, accessible, test driven and
            writing clean codes to the best of my ability
          </p> -->
        </div>

      </Section>

      <!-- About Section -->
      <section id="section-about mt-4">
        <div class="container">
          <h2>About</h2>
          <p>
            I'm currently a Software Engineer at Sidmach Technologies Limited building enterprise web solutions and
            softwares together with amazing teams for clients.
          </p>

          <p class="d-none">
            I enjoy bridging the gap between engineering and design - combining state-of-the-art
            technical knowledge with a keen eye for design to create a most beautiful product and services.
          </p>

          <p>
            As a Software Engineer, I'm passionate about building softwares that are accessible, have good user
            experience, good designs,
            and test driven.
          </p>

          <p>
            When I'm not coding you can find me surfing the internet, playing and watching football, playing video
            games, or hanging out with friends and family.
          </p>

          <!-- certifications -->
          <!-- <h5>Certifications</h5>
          <ul class="certification-list">
            <li v-for="(certification, i) in certifications" :key="i">
              <a :href= certification.link> <span class="ti-control-forward mr-3"></span> {{certification.name}}</a>
            </li>
          </ul> -->
        </div>
        <!-- <p>writing clean codes to the best of my ability. I also enjoy learning new technologies.</p> -->
      </section>

      <!-- Skills Section -->
      <section id="section-skills" class="container mt-5">
        <h2>Skills</h2>
        <p>
          I am proficient in some skills and on my way to becoming an expert. Here are some of the
          technologies I have worked with:
        </p>


        <div class="skill-category">
          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Languages</div>
            <ul>
              <li v-for="(language, i) in languages" :key="i">{{language}}</li>
            </ul>
          </div>

          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Frameworks</div>
            <ul>
              <li v-for="(framework, i) in frameworks" :key="i">{{framework}}</li>
            </ul>
          </div>

          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Database</div>
            <ul>
              <li v-for="(database, i) in databases" :key="i">{{database}}</li>
            </ul>
          </div>

          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Tools</div>
            <ul>
              <li v-for="(tool, i) in tools" :key="i">{{tool}}</li>
            </ul>
          </div>

        </div>
      </section>

      <!-- Project Section -->
      <section id="section-project" class="container">
        <h2 class="mt-5">Projects</h2>
        <div class="project">
          <div class="row">
            <div class="col-12 col-lg-4" v-for="(project, i) in projects" :key="i">
              <a class="project-link" :href=project.link target="_blank">
                <div class="card features">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img :src=project.image :alt=project.alt></span>

                      <div class="media-body">
                        <h4 class="card-title text-left">{{project.title}}</h4>
                        <p class="card-text text-left">{{project.description}}</p>
                        <ul class="list-inline mb-0 mx-auto">
                          <li class="list-inline-item" v-for="(lang, i) in project.language" :key="i"><span class="badge badge-secondary badge-pill">{{project.language[i]}}</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>



      <!-- <section class="site-section" id="section-blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="section-heading text-center">
                <h2>Blog on <strong>Medium</strong></h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="blog-entry">
                <a href="#"><img class="img-fluid" src="images/post_1.jpg" alt="Image placeholder"></a>
                <div class="blog-entry-text">
                  <h3><a href="#">Creative Product Designer From Facebook</a></h3>
                  <p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>

                  <div class="meta">
                    <a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
                    <a href="#"><span class="icon-bubble"></span> 5 Comments</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="blog-entry">
                <a href="#"><img class="img-fluid" src="images/post_2.jpg" alt="Image placeholder"></a>
                <div class="blog-entry-text">
                  <h3><a href="#">Creative Product Designer From Facebook</a></h3>
                  <p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>

                  <div class="meta">
                    <a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
                    <a href="#"><span class="icon-bubble"></span> 5 Comments</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="blog-entry">
                <a href="#"><img class="img-fluid" src="images/post_3.jpg" alt="Image placeholder"></a>
                <div class="blog-entry-text">
                  <h3><a href="#">Creative Product Designer From Facebook</a></h3>
                  <p class="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic.</p>

                  <div class="meta">
                    <a href="#"><span class="icon-calendar"></span> Aug 7, 2018</a>
                    <a href="#"><span class="icon-bubble"></span> 5 Comments</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> -->

      <!-- <section class="site-section" id="section-community">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="section-heading">
                <h2>Community</h2>
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="mb-5">Lepsta Developers</h3>
              <div class="resume-item mb-4">
                <span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
                <h4>Masteral in Information Technology</h4>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
                <span class="school">New York University</span>
              </div>
            </div>

            <div class="col-md-6">
              <h3 class="mb-5">GDG Ajah</h3>
              <div class="resume-item mb-4">
                <span class="date"><span class="icon-calendar"></span> March 2013 - Present</span>
                <h4>Masteral in Information Technology</h4>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
                <span class="school">New York University</span>
              </div>
            </div>
          </div>
        </div>
      </section> -->


      <!-- Contact section -->
      <section class="container mb-5" id="section-contact">
        <h2>Get in <strong>Touch</strong></h2>
        <p>I am opened to opportunities, collaborations, speaking engagement, developers community work,
          volunteering and relocation. I am mostly available on <a href="mailto:daniel.chukwurah@gmail.com"
            target="_blank" title="Email">email</a>, <a href="https://twitter.com/dani_chuks" target="_blank"
            title="Twitter">twitter</a> and
          <a href="https://www.linkedin.com/in/daniel-chukwurah-mcp-543a8b145/" target="_blank"
            title="LinkedIn">LinkedIn</a>.
        </p>

        <!-- LinkedIn Div -->
        <!-- <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="daniel-chukwurah-mcp-543a8b145" style="float: right"><a class="LI-simple-link" href='https://ng.linkedin.com/in/daniel-chukwurah-mcp-543a8b145?trk=profile-badge'>Daniel Chukwurah, MCP</a></div> -->

        <p>
          You can send me a message and I’ll reply as soon as possible.
        </p>

        <!-- social media icons -->
        <div class="social-media text-center mt-5">
          <p class="text-center">Say hi anytime ―</p>

          <a v-for="(socialMedia, i) in socialMediaHandles" :key="i" :href=socialMedia.link>
            <span :class=socialMedia.class></span>
          </a>
        </div>
      </section>

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
  import {projectList} from '@/components/Data/Project.js'
  import {socialMediaList} from '@/components/Data/Project.js'
  // import {certificationList} from '@/components/Api/Project.js'
export default {
  data() {
      return {
        projects: [],
        socialMediaHandles: [],
        // certifications: []
        languages: ['HTML', 'CSS', 'Javascript (ES6)', 'SQL', 'Python'],
        frameworks: ['Vue', 'Vuetify', 'Node', '.Net'],
        tools: ['MSSQL', 'MongoDB'],
        databases: ['Azure DevOps', 'Bash', 'Git & Github', 'Netlify', 'Heroku', 'Chrome DevTools']
      }
    },
    // name: 'navbar',
    // methods: {
    //   getInTouch() {
    //     window.location = "#section-contact"
    //   }

    // },
    components: {
      'nav-bar': NavBar,
      'the-footer': Footer,
      'side-navbar':SideNavBar
    },

    created() {
      projectList.forEach(project => {
          this.projects.push(project);
      })

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