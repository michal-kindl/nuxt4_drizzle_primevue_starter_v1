<script setup lang="ts">
definePageMeta({
  auth: false,  // no redirect on this page
  layout: 'simple-full'  // use the simpleFull layout for this page
})

const appId = 1; 
const defaultPage = '/users';

</script>

<template>
  <div class="h-screen overflow-hidden flex flex-col items-center justify-center">
    <LoginFields :appId="appId" :defaultPage="defaultPage" />
  </div>
</template>
