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

          <div id="accordion">
            <div class="mb-3" v-for="(project, i) in projects" :key="i">
              <a
                :id="project.title"
                class="btn text-left btn-block border-bottom"
                data-toggle="collapse"
                :data-target="project.dataTarget"
                :aria-expanded="true"
                :aria-controls="project.name"
                role="button"
              >
                <span class="h5">{{project.title}}</span>
                <span class="float-right">
                  <i class="ti-angle-down"></i>
                </span>
              </a>

              <div
                :id="project.name"
                :class="project.class"
                :aria-labelledby="project.name"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 description">
                      {{project.description}}
                      <ul class="list-inline mb-0 mx-auto mt-4 d-flex">
                        <h6 class="pr-2">Technologies</h6>
                        <li class="list-inline-item">
                          <span
                            class="badge badge-secondary badge-pill mr-1"
                            v-for="(lang, i) in project.language"
                            :key="i"
                          >{{project.language[i]}}</span>
                        </li>
                      </ul>

                      <ul class="list-inline mb-0 mx-auto mt-3 mb-3 project">
                        <a v-if="project.link != ''" :href="project.link" target="_blank">
                          <li class="list-inline-item mr-3 website btn btn-primary">View</li>
                        </a>

                        <a v-if="project.github != ''" :href="project.github" target="_blank">
                          <li class="list-inline-item github btn btn-primary">Github</li>
                        </a>
                      </ul>
                      <p>Ownership: {{project.ownership}}</p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <figure v-if="project.image">
                        <img :src="project.image" :alt="project.alt" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import { projectList } from "@/components/Data/Project.js";
export default {
  data() {
    return {
      projects: [],
    };
  },
  components: {
    "nav-bar": NavBar,
    "the-footer": Footer,
    "side-navbar": SideNavBar,
  },

  methods: {
    toggle() {
      debugger;
      let github = document.querySelector(".github");
      let website = document.querySelector(".website");
      this.projects.forEach((project, i) => {
        if (project.github == "") {
          github.style.display = "none";
        }
        if (project.link == "") {
          website.style.display = "none";
        }
      });
    },
  },

  created() {
    projectList.forEach((project) => {
      this.projects.push(project);
    });
  },

  //  mounted() {
  //     this.toggle();
  //  }
};
</script>

<style src="../assets/css/Portfolio.css" scoped></style>