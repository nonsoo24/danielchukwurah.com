<template>
    <div>
        <!-- Navbar -->
        <nav-bar></nav-bar>

        <!-- side navbar -->
        <side-navbar />

        <!-- Project Section -->
        <section id="project">
             <div class="container">
                 <h2 class="pt-4 mb-5">Portfolio</h2>

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
                                     <div class="col-md-6 col-sm-6">
                                         {{project.description}}

                                         <ul class="list-inline mb-0 mx-auto mt-4">
                                             <li class="list-inline-item"><span class="badge badge-secondary badge-pill"
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
                                             <img :src=project.image :alt=project.alt width="500px" height="300px">
                                         </figure>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>

             </div>


            <!-- <div class="project">
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
                                                <li class="list-inline-item" v-for="(lang, i) in project.language"
                                                    :key="i"><span
                                                        class="badge badge-secondary badge-pill">{{project.language[i]}}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div> -->


               <!-- <div id="accordion">

               <div class="border-bottom">
                   <a id="headingOne" class="btn text-left  btn-block" data-toggle="collapse" data-target="#collapseOne"
                       aria-expanded="true" aria-controls="collapseOne" role="button">
                      <span>Collapsible Group Item #1</span>
                        <span class="float-right">
                            <i class="ti-angle-down"></i>
                        </span>

                   </a>

                   <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                       <div class="card-body">
                           <div class="row">
                               <div class="col-md-6 col-sm-6">
                                   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                   ad
                                   squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                   quinoa
                                   nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                   squid
                                   single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                   craft beer
                                   labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                   vice lomo.
                                   Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                   probably
                                   haven't heard of them accusamus labore sustainable VHS.

                                   <p>Technologies: </p>

                                   <ul class="list-inline mb-0 mx-auto mt-3">
                                                <li class="list-inline-item"><span
                                                        class="badge badge-secondary badge-pill">HTML</span>
                                                </li>
                                                 <li class="list-inline-item"><span
                                                        class="badge badge-secondary badge-pill">CSS</span>
                                                </li>
                                                <li class="list-inline-item"><span
                                                        class="badge badge-secondary badge-pill">Js</span>
                                                </li>
                                            </ul>

                                         <ul class="list-inline mb-0 mx-auto mt-3 mb-3">
                                             <a href="">
                                                <li class="list-inline-item pr-2">Website
                                                </li>
                                                </a>

                                                <a href="">
                                                 <li class="list-inline-item">        Github
                                                </li>
                                                </a>
                                         </ul>
                                        <p>Ownership: Sidmach</p>
                               </div>
                               <div class="col-md-6 col-sm-6"><img src="../assets/Img/Bizkit-mockup.png" alt="" width="500px" height="300px"></div>
                           </div>
                       </div>
                   </div>
               </div>


               <div class="border-bottom">
                           <a id="headingTwo" class="btn text-left  btn-block collapsed" data-toggle="collapse"
                               data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               <span> Collapsible Group Item #2</span>

                               <span class="float-right">
                                   <i class="ti-angle-down"></i>
                               </span>
                           </a>

                   <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                       <div class="row">
                           <div class="col-md-6 col-sm-6">
                               <div class="card-body">
                                   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                   ad
                                   squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                   quinoa
                                   nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                   squid
                                   single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                   craft beer
                                   labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                   vice lomo.
                                   Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                   probably
                                   haven't heard of them accusamus labore sustainable VHS.
                               </div>
                           </div>
                           <div class="col-md-6 col-sm-6"></div>
                       </div>
                   </div>
               </div>

               <div class="border-bottom">
                   <a id="headingThree" class="btn text-left  btn-block collapsed" data-toggle="collapse"
                       data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <span>Collapsible Group Item #3</span>
                       <span class="float-right">
                           <i class="ti-angle-down"></i>
                       </span>
                   </a>
                   <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                       <div class="row">
                           <div class="col-md-6 col-sm-6">
                               <div class="card-body">
                                   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                   ad
                                   squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                   quinoa
                                   nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                                   squid
                                   single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                   craft beer
                                   labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                                   vice lomo.
                                   Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                                   probably
                                   haven't heard of them accusamus labore sustainable VHS.
                               </div>
                           </div>
                           <div class="col-md-6 col-sm-6"></div>
                       </div>

                   </div>
               </div>
           </div> -->
        </section>


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

<style src="../assets/css/Home.css" scoped></style>