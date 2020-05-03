<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> -->

                <!-- toggle light and dark theme -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link ti-shine" href=""></a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <!-- hamburger icon -->
                    <a href="javascript:void(0)" @click="toggle()">
                        <img id="hambuger" src="../assets/Img/hamburger-icon.svg" alt="hambuger-icon">
                    </a>
                </ul>

                <!-- close button -->
                <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;
                </a>
        </nav>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isClose: true
        }
    },

    methods: {
        toggle() {
            let sideBar = document.getElementById("mySidenav");
            let closeBtn = document.querySelector(".closebtn");
            let hambuger = document.querySelector("#hambuger");
            if (this.isClose){
                sideBar.classList.add("is-open");
                closeBtn.style.display = "block"
                hambuger.style.display = "none"
            } else {
                sideBar.classList.remove("is-open");
                closeBtn.style.display = "none"
                hambuger.style.display = "block"
            }
            this.isClose = !this.isClose
        }
    }
}

</script>

<style scoped>
    .ti-shine {
        font-size: 30px;
        color: #000;
    }

      #hambuger{
        width: 30px;
        height: 30px;
    }

     .closebtn{
        font-size: 3rem;
        display: none;
        color: #000;
        position: absolute;
        right: 20px;
        text-decoration: none
    }

    nav{
        height: 3.75rem;
        background-color: #FFFFFF;
         box-shadow: 0rem, 0.25rem 0.625rem rgba(0, 0, 0, 0.25);
    }
</style>