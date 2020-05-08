<template>
    <nav id="mySidenav" class="sidenav">
        <ul class="navbar-nav">

             <router-link id="home" class="nav-link" to="/" tag="li" active-class="active" exact>
                Home</router-link>

            <router-link id="about" class="nav-link" to="/about" tag="li" active-class="active" exact>
                About</router-link>

            <!-- <router-link id="skills" class="nav-link" to="/store" tag="li" active-class="active">Skills</router-link> -->

            <router-link id="portfolio" class="nav-link" to="/portfolio" tag="li" active-class="active">Portfolio
            </router-link>

            <router-link id="blog" class="nav-link" to="/blog" tag="li" active-class="active">Blog
            </router-link>

        </ul>
    </nav>


</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
     .sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
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
}

.sidenav li:hover {
  color: #000;
  cursor: pointer;
}

#mySidenav .navbar-nav .nav-link {
    padding-right: 80px !important;
    color: #000;
    text-align: right;
    font-weight: 700;
}

/* #mySidenav .navbar-nav .nav-link:hover{
    border-bottom: 1px solid #000;
    border-bottom-width: medium;
    width: 20px;
} */
</style>