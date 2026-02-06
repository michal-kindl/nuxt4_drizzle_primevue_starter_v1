<script setup lang="ts">
definePageMeta({
  auth: false  // no redirect on this page
})

const auth = useAuth()
const username = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  const signInResult = await auth.signIn({
    username: username.value,
    password: password.value
  },
  {
    external: true,
    redirect: true,
    callbackUrl: '/users'
  });  
}

</script>

<template>
  <div>
    <form>
      <h1>Login</h1>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="handleLogin">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>
