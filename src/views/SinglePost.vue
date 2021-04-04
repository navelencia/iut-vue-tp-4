<template>
  <div class="single-post">
    <post v-if="post" :title="post.title" :body="post.body"></post>
    <h4 v-else>Loading...</h4>
    <user v-if="user" :name="user.name" :email="user.email" :phone="user.phone"></user>
    <h4 v-else>Loading...</h4>
  </div>
</template>
<script>
import { getPost, getUser } from '../services/api';
import Post from '../components/Post';
import User from '../components/User';

export default {
  name: 'SinglePost',
  components: { Post, User },
  data () {
    return {
      post: null,
      user:null
    }
  },
  async mounted () {
    this.post = await getPost(this.$route.params.id);
    this.user = await getUser(this.post.userId);
  }
}
</script>