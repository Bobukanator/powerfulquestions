<template>
  <section>
    <div class="columns is-centered notification is-primary">
      <div class="column is-3">
        <b-image
          :src="require('@/assets/Powerful Questions-logos.jpeg')"
          alt="The Powerful Questions logo"
          class="is-small"
        ></b-image>
      </div>
    </div>
    <div class="container column is-10">
      <Nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Copyright &copy; 2022 Spero Autem LLC. All Rights Reserved.</p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "defaultLayout",
};
</script>
