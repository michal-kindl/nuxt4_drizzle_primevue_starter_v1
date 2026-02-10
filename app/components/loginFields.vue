<script setup lang="ts">
//#region Props
const { 
  appId = 1,                // default appId to 1 if not provided
  defaultPage = '/',        // default page to redirect after login
  } = defineProps<{ appId: number; defaultPage: string }>();
//#endregion

const auth = useAuth()
const username = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  const signInResult = await auth.signIn({
    username: username.value,
    password: password.value,
    appid: appId,                  // Pass the appid to the signIn method
  },
  {
    external: true,
    redirect: true,
    callbackUrl: defaultPage,           // Use the defaultPage prop for redirection
  });  
}
</script>

<template>
  <div>    
    <Card class="w-64">
      <template #title>
        <div class="flex gap-2 flex-row items-center justify-center my-4">
          <i class="pi pi-user text-2xl"></i>
          Přihlášení
        </div>
      </template>
      <template #content>        
        <form>
          <div class="flex flex-col gap-2">
            <InputText v-model="username" placeholder="jméno" size="small"/>
            <InputText v-model="password" type="password" placeholder="heslo" size="small" />            
            <Button @click="handleLogin" severity="secondary" size="small" class="mt-4">Login</Button>
            <p v-if="error">{{ error }}</p>
          </div>
        </form>
      </template>
    </Card>
  </div>
</template>
