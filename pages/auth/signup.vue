<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 h-screen bg-gradient-to-bl from-indigo-500 to-pink-500 overflow-scroll">
    <div class="bg-gray-900 text-white w-full h-full p-20">
      <h1 class="text-5xl font-bold">
        Sign Up
      </h1>
      <p class="text-red-500 font-bold">
        {{ error }}
      </p>
      <form class="flex flex-col gap-10 mb-10 mt-20" @submit.prevent="onSubmit()">
        <div class="flex flex-col gap-2">
          <label for="fname" class="font-bold">Full Name</label>
          <input id="fname" v-model="fname" type="text" class="text-black py-2 px-4 rounded" placeholder="Enter Full Name Here...">
        </div>
        <div class="flex flex-col gap-2">
          <label for="username" class="font-bold">Username</label>
          <input id="username" v-model="username" type="text" class="text-black py-2 px-4 rounded" placeholder="Enter Username Here...">
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="font-bold">Password</label>
          <input id="password" v-model="password" type="password" class="text-black py-2 px-4 rounded" placeholder="Enter Password Here...">
        </div>
        <div class="flex flex-col gap-2">
          <label for="cpassword" class="font-bold">Confirm Password</label>
          <input id="cpassword" v-model="cpassword" type="password" class="text-black py-2 px-4 rounded" placeholder="Confirm Password Here...">
        </div>
        <button type="submit" class="py-2 px-4 rounded bg-indigo-500 text-white">
          Sign Up
        </button>
      </form>
    </div>
    <div class="lg:block hidden" />
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data () {
    return {
      fname: '',
      username: '',
      password: '',
      cpassword: '',
      insecure: '',
      error: ''
    }
  },
  methods: {
    onSubmit (e) {
      if (this.password !== this.cpassword) {
        this.error = 'Passwords Must Match'
      }
      this.$axios.post('/api/users/register', {
        fname: this.fname,
        username: this.username,
        password: this.password
      }).then((response) => {
        if (response.data.result.id) {
          this.$router.push({ path: '/auth/login', params: { registered: 'yes' } })
        } else {
          this.error = response.data.error
        }
      }).catch((error) => {
        console.log(error)
        this.error = 'Something on the Server Went Wrong, Please Try Again'
      })
    }
  }
}
</script>
