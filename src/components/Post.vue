<template>
  <div class="post">
    <template v-if="id">
      <router-link :to="`/post/${id}`"><h3>{{title}}</h3></router-link>
    </template>
    <h1 v-else>{{title}}</h1>
    <p>{{body}}</p>
  </div>
</template>
<script>
export default {
  name: 'Post',
  props: ['title', 'body', 'id'],
}
</script>
<style lang="scss" scoped>
h1, h3 {
  text-transform: uppercase;
}
</style>