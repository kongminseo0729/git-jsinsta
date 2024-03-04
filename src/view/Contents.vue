<template>
  <div>
    <LeftSidebar />
    <PostList />
    <RightSidebar />
  </div>
</template>

<script>
import PostList from './PostList.vue';
import LeftSidebar from './LeftSideBar.vue';
import RightSidebar from './RightSideBar.vue';

export default {
  name: 'PostContents',
  components: {
    PostList,
    LeftSidebar,
    RightSidebar,
  },
};
</script>

<style scoped></style>
