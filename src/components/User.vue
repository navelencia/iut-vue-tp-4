<template>
  <div class="user">
    <h4>{{name}}</h4>
    <ul>
      <li>✉️ {{email}}</li>
      <li>☎️ {{phone}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'User',
  props: ['name', 'email', 'phone'],
}
</script>
<style lang="scss" scoped>
div.user {
  background: rgb(221, 221, 221);
  border-radius: 5px;
  padding: 10px;
  margin-top: 40px;

  h4 {
    margin: 10px;
  }

  ul {
    margin: 10px;
  }
}
</style>