<template>
  <v-app>
    <v-app-bar app dark>
      <li class="navbar-nav">
        <a href="/searchSimpleQuery" class="nav-link">Articles Search Simple Query</a>
      </li>

      <br>
      
      <li class="navbar-nav">
        <a href="/indexing" class="nav-link">Indexing</a>
      </li>

      <br>

      <li class="navbar-nav">
        <a href="/login" class="nav-link">Login</a>
      </li>

       <li class="navbar-nav">
        <a href="/registerBuyer" class="nav-link">Register Buyer</a>
      </li>

       <li class="navbar-nav">
        <a href="/registerSeller" class="nav-link">Register Seller</a>
      </li>

     <router-link
        to="/"
        tag="h4"
        style="font-size: 1.6rem; font-weight: 300; line-height: 1.2"
        ></router-link
      >
      <v-spacer></v-spacer>
      <v-btn icon to="/search"  v-if="user === null">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon to="/index"  v-if="user === null">
        <v-icon>mdi-alpha-i-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      drawer: null,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapMutations(['setUser']),
    logout(){
      this.setUser(null);
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
div[data-app="true"] {
  width: 100%;
  height: 100%;
  background-size: cover;
}

a:hover {
  text-decoration: none;
}
h4:hover {
  cursor: pointer;
}

#logout:hover {
  cursor: pointer;
}
</style>
