<template>
  <v-app>
    <v-app-bar
      flat
      shrink-on-scroll
      prominent
      fixed
      app
      fade-img-on-scroll
      color="white"
      src="/header_bg.png"
    >
      <h2
        class="accent--text font-weight-light text-no-wrap"
        v-text="title"
      ></h2>
      <v-tabs
        centered
        active-class="font-weight-bold"
        slider-color="transparent"
      >
        <v-tab to="/">Home</v-tab>
        <v-tab to="/profile">Profile</v-tab>
        <v-tab to="/works">Works</v-tab>
        <v-tab to="/techblog">TechBlog</v-tab>
      </v-tabs>
      <v-btn
        icon
        color="accent"
        href="https://www.linkedin.com/in/明香里-白柳-6a69171b6"
        target="_blank"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        icon
        color="accent"
        href="https://github.com/bambis13"
        target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        color="accent"
        href="https://twitter.com/bambis13_rom"
        target="_blank"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'bambis13.io',
    }
  },
}
</script>
