<template>
    <nav id="mySidenav" class="sidenav">
            <ul class="navbar-nav ml-auto">
                <!-- <li class="nav-item active">
                        <a class="nav-link" href="#section-home">Home <span class="sr-only">(current)</span></a>
                    </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="#section-about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section-skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section-project">Project</a>
                </li>
                <!-- <li class="nav-item">
                        <a class="nav-link" href="#section-hackaton">Hackathon</a>
                    </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="#section-blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section-contact">Contact</a>
                </li>
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
  opacity: 0.5;
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
</style>