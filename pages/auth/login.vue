<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 h-screen bg-gradient-to-bl from-indigo-500 to-pink-500">
    <div class="bg-gray-900 text-white w-full h-full p-20">
      <h1 class="text-5xl font-bold">
        Log In
      </h1>
      <p class="text-red-500 font-bold">
        {{ error }}
      </p>
      <form class="flex flex-col gap-10 mb-10 mt-20" @submit.prevent="onSubmit()">
        <div class="flex flex-col gap-2">
          <label for="username" class="font-bold">Username</label>
          <input id="username" v-model="username" type="text" class="text-black py-2 px-4 rounded" placeholder="Enter Username Here...">
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="font-bold">Password</label>
          <input id="password" v-model="password" type="password" class="text-black py-2 px-4 rounded" placeholder="Enter Password Here...">
        </div>
        <div class="flex flex-row gap-2">
          <input id="insecureBox" v-model="insecure" type="checkbox" class="accent-indigo-500 cursor-pointer">
          <label for="insecureBox" class="cursor-pointer">Keep me logged in</label>
        </div>
        <button type="submit" class="py-2 px-4 rounded bg-indigo-500 text-white">
          Log In
        </button>
      </form>
    </div>
    <div class="lg:block hidden" />
  </div>
</template>

<script>
export default {
  name: 'LogInPage',
  data () {
    return {
      username: '',
      password: '',
      insecure: '',
      error: ''
    }
  },
  methods: {
    onSubmit (e) {
      this.$auth.loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      }).catch((error) => {
        console.log(error)
        if (error.response.data.message) {
          this.error = error.response.data.message
          console.log(this.error)
        }
      })
    }
  }
}
</script>
