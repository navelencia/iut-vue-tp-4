<template>
  <div class="home">
    <h1>Home</h1>
    <hr>
    <h2>Posts</h2>
    <post v-for="post of posts" :key="post.id" :title="post.title" :body="post.body" :id="post.id"></post>
  </div>
</template>

<script>
import Post from '../components/Post';
import { getPosts } from '../services/api';
export default {
  name: 'Home',
  components: { Post },
  data () {
    return {
      posts: []
    }
  },
  async mounted () {
    this.posts = await getPosts();
  }
}
</script>
