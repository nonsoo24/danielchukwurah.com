<template>
  <div class="home">
    <!-- Navbar -->
    <nav-bar></nav-bar>
    <main>

    <!-- Introduction Section -->
      <Section id="section-intro">
        <div class="container">
          <h1>Hello!</h1>
          <p>
            I'm <strong>Daniel Nonso Chukwurah</strong>, A Front-end Engineer based in Lagos, Nigeria. I help brands and
            organistions
            build scalable web applications and softwares with good user experience and accessibility that meets their
            business
            goals.
          </p>

          <div class="text-left">
            <button @click="getInTouch()" class="btn btn-primary box bounce">Get in Touch</button>
          </div>

          <!-- <p>
            I'm passionate about building softwares with good user experience, good designs, accessible, test driven and
            writing clean codes to the best of my ability
          </p> -->
        </div>

      </Section>

    <!-- About Section -->
      <section id="section-about">
        <div class="container">
          <h2>About</h2>
          <p>
            I'm currently a Front-end Engineer at Sidmach Technologies Limited building enterprise web solutions and
            softwares together with amazing teams for clients.
          </p>

          <p class="d-none">
            I enjoy bridging the gap between engineering and design - combining state-of-the-art
            technical knowledge with a keen eye for design to create a most beautiful product and services.
          </p>

          <p>
            As a Front-end Engineer, I'm passionate about building softwares that are accessible, have good user
            experience, good designs,
            and test driven.
          </p>

          <p>
            When I'm not coding you can find me surfing the internet, playing and watching football, playing video
            games, farming (Yeah! you heard that) or hanging out with friends and family.
          </p>

          <!-- certifications -->
          <h5>Certifications</h5>
          <ul class="certification-list">
            <li v-for="(certification, i) in certifications" :key="i">
              <a :href= certification.link> <span class="ti-control-forward mr-3"></span> {{certification.name}}</a>
            </li>
          </ul>
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
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript (ES6)</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </div>

          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Frameworks</div>
            <ul>
              <li>Vue</li>
              <li>Vuetify</li>
              <li>Node</li>
              <li>.Net</li>
            </ul>
          </div>

          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Database</div>
            <ul>
              <li>MSSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div class="skill-category-label">
            <div class="text-left text-uppercase font-weight-bolder">Tools</div>
            <ul>
              <li>Azure DevOps</li>
              <li>Bash</li>
              <li>Git & Github</li>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>

        </div>
      </section>

<!-- Project Section -->
      <section id="section-project" class="container">
        <h2>Projects</h2>
        <div class="project">
          <div class="row">
             <div class="col-12 col-lg-4" v-for="(project, i) in projects" :key="i" >
              <a class="project-link" :href= project.href target="_blank">
                <div class="card features">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img :src= project.image :alt= project.alt></span>

                      <div class="media-body">
                        <h4 class="card-title text-left">{{project.title}}</h4>
                        <p class="card-text text-left">{{project.description}}</p>
                        <ul class="list-inline mb-0 mx-auto">
                          <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Vue</span></li>
                          <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Vue</span></li>
                          <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Vue</span></li>
                          <li class="list-inline-item"><span class="badge badge-secondary badge-pill">Vue</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <!-- <div class="col-12 col-lg-4">
              <a class="project-link" href="https://bizkit.com.ng/" target="_blank">
                <div class="card features">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img src="../assets/Img/Bizkit.png" alt="Bizkit-logo"></span>

                      <div class="media-body">
                        <h4 class="card-title text-left">Bizkit</h4>
                        <p class="card-text text-left">A platform that offers SME Owners and Managers a
                          seamless approach in
                          handling
                          Accounting, Inventory, Payroll and Invoicing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>


            <div class="col-12 col-lg-4">
              <a class="project-link flex-grow" href="https://igofer-app.herokuapp.com" target="_blank">
                <div class="card features">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img src="../assets/Img/iGofer.png" alt="iGofer-logo"></span>
                      <div class="media-body">
                        <h4 class="card-title text-left">iGofer</h4>
                        <p class="card-text text-left">A market place that connects individuals to vetted and
                          professional handy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-12 col-lg-4">
              <div class="card features">
                <a class="project-link" href="https://waechris.azurewebsites.net" target="_blank">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img src="../assets/Img/waec-logo.png" alt="WAEC-logo"></span>
                      <div class="media-body">
                        <h4 class="card-title text-left">WAEC HRIS</h4>
                        <p class="card-text text-left">A Platform that automates employee management processes</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <a class="project-link" href="https://eagriculture360.azurewebsites.net/" target="_blank">
                <div class="card features">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img src="../assets/Img/e-agric360.svg" alt="iGofer-logo"></span>
                      <div class="media-body">
                        <h4 class="card-title text-left">e-Agric360</h4>
                        <p class="card-text text-left">A platform that links verified Farmers to loans, credit
                          facilities and market place</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-12 col-lg-4">
              <a class="project-link" href="https://mobileinsure.azurewebsites.net" target="_blank">
                <div class="card features">
                  <div class="card-body">
                    <div class="media">
                      <span class="mr-3"><img src="../assets/Img/e-agric360.svg" alt="CinchIT-logo"></span>
                      <div class="media-body">
                        <h4 class="card-title text-left">Cinch IT</h4>
                        <p class="card-text text-left">
                          A platform that links Phone buyers to Insurance companies
                        </p>
                          <ul class="project-language d-flex">
                            <li>Javascript</li>
                            <li>.Net</li>
                            <li>MSSQL</li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div> -->

          </div>

          <!-- <ul class="project-list d-flex justify-content-around">
            <li class="project-card card flex-row shadow rounded">
              <div class="project-content flex-row">
                <a class="project-link" href="https://bizkit.com.ng/" target="_blank">
                  <div class="flex-row d-flex">
                    <div><img src="../assets/Img/Bizkit.png" alt="iGofer-logo"></div>
                    <div class="project-details">
                      <h3 class="text-left project-title">Bizkit</h3>
                      <p class="text-left project-description">A platform that offers SME Owners and Managers a
                        seamless approach in
                        handling
                        Accounting, Inventory, Payroll and Invoicing.
                      </p>

                      <div>
                        <ul class="project-language d-flex">
                          <li>Javascript</li>
                          <li>.Net</li>
                          <li>C#</li>
                          <li>Vue Js</li>
                          <li>MSSQL</li>
                        </ul>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </li>

            <li class="project-card card flex-row shadow rounded">
              <div class="project-content flex-row">
                <a class="project-link flex-grow" href="https://igofer-app.herokuapp.com" target="_blank">
                  <div class="flex-row d-flex">
                    <div><img src="../assets/Img/iGofer.png" alt="iGofer-logo"></div>
                    <div class="project-details">
                      <h3 class="text-left project-title">iGofer</h3>
                      <p class="text-left project-description">A market place that connects individuals to vetted and professional handy
                men/artisans
                      </p>

                      <div>
                        <ul class="project-language d-flex">
                          <li>Javascript</li>
                          <li>Vue Js</li>
                          <li>Node</li>
                          <li>MongoDB</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </li>

            <li class="project-card card flex-row shadow rounded">
              <div class="project-content flex-row">
                <a class="project-link" href="https://waechris.azurewebsites.net/" target="_blank">
                  <div class="flex-row d-flex">
                    <div><img src="../assets/Img/waec-logo.png" alt="iGofer-logo"></div>
                    <div class="project-details">
                      <h3 class="text-left project-title">WAEC HR</h3>
                      <p class="text-left project-description">A Platform that automates employee management processes
                      </p>

                      <div>
                        <ul class="project-language d-flex">
                          <li>Javascript</li>
                          <li>.Net</li>
                          <li>C#</li>
                          <li>MSSQL</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul class=" project-list d-flex justify-content-around">
              <li class="project-card card shadow rounded">
                <div class="project-content flex-row">
                  <a class="project-link" href="https://mobileinsure.azurewebsites.net" target="_blank">
                    <div class="flex-row d-flex">
                      <div><img src="../assets/Img/e-agric360.svg" alt="iGofer-logo"></div>
                      <div class="project-details">
                        <h3 class="text-left project-title">Cinch IT</h3>
                        <p class="text-left project-description">A platform that links Phone buyers to Insurance companies
                        </p>

                        <div>
                          <ul class="project-language d-flex">
                            <li>Javascript</li>
                            <li>.Net</li>
                            <li>MSSQL</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li class="project-card card shadow rounded">
                <div class="project-content flex-row">
                  <a class="project-link" href="https://eagriculture360.azurewebsites.net/" target="_blank">
                    <div class="flex-row d-flex">
                      <div><img src="../assets/Img/e-agric360.svg" alt="iGofer-logo"></div>
                      <div class="project-details">
                        <h3 class="text-left project-title">e-Agric360</h3>
                        <p class="text-left project-description">A platform that links verified Farmers to loans, credit facilities and market place
                        </p>

                        <div>
                          <ul class="project-language d-flex">
                            <li>Javascript</li>
                            <li>.Net</li>
                            <li>C#</li>
                            <li>Vue Js</li>
                            <li>MSSQL</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li class="project-card card shadow rounded">
                <div class="project-content flex-row">
                  <a class="project-link" href="https://eagriculture360.azurewebsites.net/" target="_blank">
                    <div class="flex-row d-flex">
                      <div><img src="../assets/Img/e-agric360.svg" alt="iGofer-logo"></div>
                      <div class="project-details">
                        <h3 class="text-left project-title">e-Agric360</h3>
                        <p class="text-left project-description">A platform that links verified Farmers to loans, credit facilities and market place
                        </p>

                        <div>
                          <ul class="project-language d-flex">
                            <li>Javascript</li>
                            <li>.Net</li>
                            <li>C#</li>
                            <li>Vue Js</li>
                            <li>MSSQL</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
          </ul> -->
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
        <p>
          You can send me a message and I’ll reply as soon as possible.
        </p>

        <!-- social media icons -->
        <div class="social-media text-center mt-5">
          <p class="text-center">Say hi anytime ―</p>
          <a href="https://web.facebook.com/nonsochukwura">
            <span class="ti-facebook mr-3 ti-3x"></span>
          </a>

          <a href="https://www.instagram.com/danielchukwura/?hl=en">
            <span class="ti-instagram mr-3 ti-3x"></span>
          </a>


          <a href="https://twitter.com/dani_chuks"><span class="ti-twitter-alt mr-3 ti-3x"> </span></a>


          <a href="https://www.linkedin.com/in/daniel-chukwurah-mcp-543a8b145/">
            <span class="ti-linkedin mr-3 ti-3x"></span>
          </a>


          <a href="https://github.com/nonsoo24/">
            <span class="ti-github mr-3 ti-3x"></span>
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
  import {projectList} from '../components/Api/Project.js'
  import {certificationList} from '../components/Api/Project.js'
export default {
  data() {
      return {
        projects: [],
        certifications: []
      }
    },
    // name: 'navbar',
    methods: {
      getInTouch() {
        window.location = "#section-contact"
      },

      mouseOver() {
         let projectDivHover = document.querySelector(".project-language").addEventListener("mouseover", mouseOver);

         let projectDivHoverOut = document.querySelector(".project-language").addEventListener("mouseout", mouseOut);

          document.getElementById("demo").style.color = "black";
        }

    },
    components: {
      'nav-bar': NavBar,
      'the-footer': Footer
    },

    created() {
      projectList.forEach(project => {
          this.projects.push(project);
      }),

      certificationList.forEach(certification => {
          this.certifications.push(certification);
      })
    }
  }

</script>

<style src="../assets/css/Home.css" scoped></style>