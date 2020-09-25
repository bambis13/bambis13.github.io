<template>
  <v-app>
    <div class="mx-auto">
      <h1 class="text-center my-5 font-weight-light">開発中...</h1>
      <v-img
        contain
        src="https://2.bp.blogspot.com/-JPa0Nzk_E8M/Vf-aIH2jsyI/AAAAAAAAyDc/2FG8dSNSk-k/s400/computer_girl.png"
        alt="コンピューターを使いこなす子供のイラスト"
        width="300px"
      />
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'maintenance',
  validate(context) {
    return context.env.is_maintenance
  },
}
</script>
