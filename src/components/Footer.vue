<template>
    <div>
        <footer>
             <hr>
                <div>
                    <p class="text-center pb-1">&copy; {{ new Date().getFullYear() }} Daniel Chukwurah | All rights reserved.</p>
                </div>
        </footer>
    </div>
</template>

<style scoped>
    footer {
    background: #fff !important;
}

p, hr{
    margin: 0rem;
}

@media (min-width:320px) {
    p {
        font-size: 0.8rem;
    }
}

.dark-theme footer{
     background: #071521 !important;
     color: #fff;
}

/* .list-group-item {
    background-color: #F5F5F7 !important;
} */
</style>