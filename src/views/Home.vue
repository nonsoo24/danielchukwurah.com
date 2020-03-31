<template>
  <div class="home">
    <nav-bar></nav-bar>
    <main>
      <Section id="section-intro">
        <div class="container">
          <h2>Hello!</h2>
          <p>
            I'm <strong>Daniel Nonso Chukwurah</strong>, A Front-end Engineer based in Lagos, Nigeria. I help brands and
            organistions
            build scalable web applications and softwares with good user experience and accessibility that meets their
            business
            goals.
          </p>

          <div class="text-left">
            <button @click="getInTouch()">Get in Touch</button>
          </div>

          <!-- <p>
            I'm passionate about building softwares with good user experience, good designs, accessible, test driven and
            writing clean codes to the best of my ability
          </p> -->
        </div>

      </Section>

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

          <h5 class="text-left font-weight-bolder">Certifications</h5>
            <ul class="certification-list">
              <li>
                <a href="https://www.youracclaim.com/badges/2e7a7211-3f09-486e-a1a9-d33d12c5b00d/linked_in_profile">Azure Fundamentals</a>
              </li>
              <li>
                <a href="https://www.youracclaim.com/badges/5b6a9903-f835-4832-a1bf-a10d28cd2c4d/linked_in_profile">Exam 480: Programming in HTML5 with JavaScript and CSS3</a>
              </li>

              <li>
                <a href="https://www.credential.net/58d95e1d-acc4-4b69-a73c-9452b50f8950?username=danielchukwurah">Leadership and Team building</a>
              </li>
            </ul>
        </div>
        <!-- <p>writing clean codes to the best of my ability. I also enjoy learning new technologies.</p> -->
      </section>

      <!-- <section class="site-section" id="section-about">
        <div class="container">
          <div class="row mb-5 align-items-center">
            <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0 pt-5 pb-5">
              <img class="img-fluid" id="about-me-pics" src="images\Daniel_Chukwurah.JPG" alt="Image placeholder">
            </div>
            <div class="col-lg-5 pl-lg-5">
              <div class="section-heading">
                <h2>About <strong>Me</strong></h2>
              </div>
              <p class="lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                language
                ocean.</p>
              <p class="mb-5  ">A small river named Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

              <p>
                <a class="btn btn-primary px-4 py-2 btn-sm smoothscroll" href="#section-contact">Continue</a>
                <a class="btn btn-secondary px-4 py-2 btn-sm" href="#">Certifications</a>

              </p>
            </div>
          </div>
        </div>
      </section> -->

      <section id="section-skills" class="container">
        <h2>Skills</h2>
        <p>
          I am proficient in some skills and on my way to becoming an expert. Here are some of the
          technologies I have worked with:
        </p>


        <div class="skill-category d-flex justify-content-between w-75">
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

      <section id="section-project" class="container">
        <h2>Projects</h2>
        <div class="project">
           <div class="row">
                <div class="col-12 col-lg-4">
                     <a class="project-link" href="https://bizkit.com.ng/" target="_blank">
                    <div class="card features">
                        <div class="card-body">
                            <div class="media">
                                <span class=" mr-3"><img src="../assets/Img/Bizkit.png" alt="iGofer-logo"></span>

                                <div class="media-body">
                                    <h4 class="card-title text-left">Bizkit</h4>
                                    <p class="card-text text-left">A platform that offers SME Owners       and Managers a
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
                                    <p class="card-text text-left">A market place that connects individuals to vetted and professional handy</p>
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
                                    <p class="card-text text-left">A platform that links verified Farmers to loans, credit facilities and market place</p>
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
                                    <p class="card-text text-left">A platform that links Phone buyers to Insurance companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
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


      <section class="site-section container mb-5" id="section-contact">
        <h2>Get in <strong>Touch</strong></h2>
        <p>I am opened to opportunities, collaborations, speaking engagement, developers community work,
          volunteering and relocation. I am mostly available on <a href="mailto:daniel.chukwurah@gmail.com"
            target="_blank" title="Email">email</a>, <a href="https://twitter.com/dani_chuks" target="_blank"
            title="Twitter">twitter</a> and
          <a href="https://www.linkedin.com/in/daniel-chukwurah-mcp-543a8b145/" target="_blank"
            title="LinkedIn">LinkedIn</a>.
        </p>
        <p>You can send me a message and I’ll reply as soon as possible.</p>
      </section>

    </main>
    <the-footer></the-footer>
  </div>
</template>
<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
export default {
  data() {
      return {}
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
    }
  }

</script>

<style src="../assets/css/Home.css" scoped></style>