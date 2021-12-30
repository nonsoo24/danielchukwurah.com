<template>
  <div id="accordion">
    <div class="mb-3" v-for="(item, i) in items" :key="i">
      <a
        :id="item.title"
        class="btn text-left btn-block border-bottom"
        data-toggle="collapse"
        :data-target="item.dataTarget"
        :aria-expanded="true"
        :aria-controls="item.name"
        role="button"
      >
        <span class="h5">{{item.title}}</span>
        <span class="float-right">
          <i class="ti-angle-down"></i>
        </span>
      </a>

      <div
        :id="item.name"
        :class="item.class"
        :aria-labelledby="item.name"
        data-parent="#accordion"
      >
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 col-sm-6 description">
              {{item.description}}
              <ul class="list-inline mb-0 mx-auto mt-4 d-flex">
                <h6 class="pr-2">Technologies</h6>
                <li class="list-inline-item">
                  <span
                    class="badge badge-secondary badge-pill mr-1"
                    v-for="(lang, i) in item.language"
                    :key="i"
                  >{{item.language[i]}}</span>
                </li>
              </ul>

              <ul class="list-inline mb-0 mx-auto mt-3 mb-3 item">
                <a v-if="item.link != ''" :href="item.link" target="_blank">
                  <li class="list-inline-item mr-3 website btn btn-primary">View</li>
                </a>

                <a v-if="item.github != ''" :href="item.github" target="_blank">
                  <li class="list-inline-item github btn btn-primary">Github</li>
                </a>
              </ul>
              <p>Ownership: {{item.ownership}}</p>
            </div>
            <div class="col-md-6 col-sm-6">
              <figure v-if="item.image">
                <img :src="item.image" :alt="item.alt" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PortfolioItem",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style src="../assets/css/Portfolio.css" scoped></style>