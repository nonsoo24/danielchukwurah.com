<template>
    <nav id="mySidenav" class="sidenav">
        <ul class="navbar-nav">
             <!-- close button -->
            <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;
            </a>

             <router-link id="home" class="nav-link" to="/" tag="li" active-class="active" exact>
                Home</router-link>

            <router-link id="about" class="nav-link" to="/about" tag="li" active-class="active" exact>
                About</router-link>

            <!-- <router-link id="skills" class="nav-link" to="/store" tag="li" active-class="active">Skills</router-link> -->

            <router-link id="portfolio" class="nav-link" to="/portfolio" tag="li" active-class="active">Portfolio
            </router-link>

            <router-link id="blog" class="nav-link" to="/#" tag="li" active-class="active">Blog
            </router-link>

        </ul>
    </nav>


</template>

<script>
import { eventBus } from '../main'
export default {
    data() {
        return {
        }
    },
    methods: {
        toggle(){
            eventBus.closeBtn();
        }
    }
}
</script>

<style>
     .sidenav {
         height: 100%;
         width: 0;
         position: fixed;
         z-index: 9999;
         top: 0;
         right: 0;
         background-color: #fff;
         /* box-shadow: 0 0 1px 2px #E2E2E2; */
         /* opacity: 0.5; */
         overflow-x: hidden;
         transition: 0.5s;
         padding-top: 73px;
     }

     .sidenav li {
         text-decoration: none !important;
         font-size: 1.2rem;
         /* color: #818181; */
         color: #000;
         display: block;
         transition: 0.3s;
         text-align: left;
        /* list-style-type: circle !important; */
     }

     .sidenav li:hover {
         cursor: pointer;
     }

     .router-link-exact-active {
         color: rgb(253, 179, 42) !important;
     }

     @media screen and (max-height: 450px) {
         /* .sidenav {
             padding-top: 15px;
         } */

         .sidenav a {
             font-size: 2rem;
         }
     }

     #mySidenav .navbar-nav .nav-link {
         padding-left: 60px !important;
         color: #000;
         text-align: left;
         font-weight: 700;
     }

     #mySidenav .navbar-nav .nav-link:hover {
         color: rgb(253, 179, 42);
     }

     .closebtn {
         font-size: 2rem;
         display: none;
         color: #000;
         position: absolute;
         right: 20px;
         text-decoration: none
     }

     .closebtn:hover {
         text-decoration: none;
         color: rgb(253, 179, 42);
     }

/* #mySidenav .navbar-nav .nav-link:hover{
    border-bottom: 1px solid #000;
    border-bottom-width: medium;
    width: 20px;
} */
</style>