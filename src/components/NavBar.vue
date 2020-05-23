<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <!-- toggle light and dark theme -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <input type="checkbox" id='theme-switch' v-model="checked">

                    <label for='theme-switch'>
                        <svg v-if="checked === true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-sun">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>

                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <!-- hamburger icon -->
                <li class="nav-item">
                 <svg  v-if="checked === true" @click="toggle()" class="hambuger" viewBox="0 0 100 80" width="40" height="40" fill="#fff" stroke="#fff">
                    <rect width="100" height="10" rx="8"></rect>
                    <rect y="30" width="100" height="10" rx="8"></rect>
                    <rect y="60" width="100" height="10" rx="8"></rect>
                </svg>
                 <svg  v-else @click="toggle()"  class="hambuger" viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="10" rx="8"></rect>
                    <rect y="30" width="100" height="10" rx="8"></rect>
                    <rect y="60" width="100" height="10" rx="8"></rect>
                </svg>

                 <!-- <a v-else href="javascript:void(0)" @click="toggle()">
                    <img id="hambuger" src="../assets/Img/hamburger-icon.svg" alt="hambuger-icon">
                </a> -->
                </li>
            </ul>

            <!-- close button -->
            <!-- <a href="javascript:void(0)" class="closebtn" @click="toggle()">&times;
            </a> -->
            <!-- <svg viewbox="0 0 40 40">
    <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg> -->
        </nav>

    </div>
</template>

<script>
//import * as Cookies from "js.cookie";
import {eventBus} from '../main'
export default {
    data() {
        return {
            isClose: true,
            checked: false
        }
    },
    watch: {
        checked: (newValue, oldValue) => {
            let getBody = document.querySelector("body");
            if (newValue === true) {
                getBody.classList.add("dark-theme")
                localStorage.setItem('dark-theme', 'true');
            } else {
                getBody.classList.remove("dark-theme")
                localStorage.removeItem('dark-theme');
            }

        },
        isClose: (value) => {
            if (value == false){
                 eventBus.$on('close', () => {
                     let sideBar = document.getElementById("mySidenav");
                    sideBar.classList.remove("is-open");
                    let hambuger = document.querySelector(".hambuger");
                    hambuger.style.display = "block";
                 })
            }
        }
    },
    mounted() {
        let darkTheme = localStorage.getItem("dark-theme");

        const getBodyTag = document.querySelector("body");
        if (darkTheme == 'true') {
            this.checked = true;
            //console.log(darkTheme);
            getBodyTag.classList.add("dark-theme");

        } else {
            getBodyTag.classList.remove("dark-theme")
        }
    },
    methods: {
        toggle() {
            let sideBar = document.getElementById("mySidenav");
            let closeBtn = document.querySelector(".closebtn");
            let hambuger = document.querySelector(".hambuger");
            if (this.isClose) {
                sideBar.classList.add("is-open");
                closeBtn.style.display = "block"
                hambuger.style.display = "none"
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

    .hambuger {
        cursor: pointer;
    }

    nav {
        height: 3.75rem;
        background-color: #FFFFFF;
        box-shadow: 0rem, 0.25rem 0.625rem rgba(0, 0, 0, 0.25);
    }

    .feather {
        position: absolute;
        top: 17px;
        left: 40px;
        cursor: pointer;
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        left: 43px;
        top: 24px;
    }

    input:checked~.checkmark:after {
        display: block;
    }

    @media (min-width:320px) {
        .hambuger {
            width: 80%;
            height: 80%;
        }

         .feather {
            position: absolute;
            top: 17px;
            left: 22px;
            cursor: pointer;
        }

           /* .feather-moon,  .feather-sun  {
           width: 30%;
           height: 30%;
        } */

        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            left: 25px;
            top: 24px;
        }
    }

    .dark-theme .navbar {
        background-color: #071521;
    }

    .dark-theme #hambuger {
        color: #fff;
    }

    .dark-theme .sun {
        color: #fff;
    }
</style>