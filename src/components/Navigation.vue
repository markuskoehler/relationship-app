<template>
    <b-navbar toggleable="md" type="light" variant="light">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/"><span class="oi oi-heart" title="Relationship" aria-hidden="true"></span></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav v-for="route in routes" :key="route.path">
                <b-nav-item :to="route" :exact="route.path == '/'">{{ route.title }}</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>

</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    routes: function () {
      var routes = []
      // console.log(this.$router.options.routes)
      for (var i in this.$router.options.routes) {
        if (!this.$router.options.routes.hasOwnProperty(i)) {
          continue
        }
        var route = this.$router.options.routes[i]
        if (route.hasOwnProperty('title')) {
          routes.push(route)
        }
      }
      return routes
    }
  }
}
</script>

<style>

</style>
