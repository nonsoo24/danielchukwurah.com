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
                            <a :id=project.title class="btn text-left btn-block border-bottom" data-toggle="collapse"
                                :data-target=project.dataTarget :aria-expanded="true" :aria-controls=project.name
                                role="button">
                                <span class="h5">{{project.title}}</span>
                                <span class="float-right">
                                    <i class="ti-angle-down"></i>
                                </span>

                            </a>

                            <div :id=project.name :class=project.class :aria-labelledby=project.name
                                data-parent="#accordion">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 description">
                                            {{project.description}}

                                            <ul class="list-inline mb-0 mx-auto mt-4 d-flex">
                                                <h6 class="pr-2">Languages</h6>
                                                <li class="list-inline-item"><span
                                                        class="badge badge-secondary badge-pill mr-1"
                                                        v-for="(lang, i) in project.language"
                                                        :key="i">{{project.language[i]}}</span>
                                                </li>
                                            </ul>

                                            <ul class="list-inline mb-0 mx-auto mt-3 mb-3">
                                                <a :href=project.link>
                                                    <li class="list-inline-item pr-2">Website
                                                    </li>
                                                </a>

                                                <a :href=project.github>
                                                    <li class="list-inline-item"> Github
                                                    </li>
                                                </a>
                                            </ul>
                                            <p>Ownership: {{project.ownership}}</p>
                                        </div>
                                        <div class="col-md-6 col-sm-6">
                                            <figure>
                                                <img :src=project.image :alt=project.alt>
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
import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  import SideNavBar from '@/components/SideNavBar.vue'
 import {projectList} from '@/components/Data/Project.js'
 export default {
     data() {
         return {
             projects: [],
         }
     },
      components: {
      'nav-bar': NavBar,
      'the-footer': Footer,
      'side-navbar': SideNavBar
    },

     created() {
         projectList.forEach(project => {
             this.projects.push(project);
         })
     },


    //  mounted(){
    //      $('.collapse').collapse()
    //  }
 }
</script>

<style src="../assets/css/Portfolio.css" scoped></style>