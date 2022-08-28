<template>
    <div class="flex flex-col h-screen justify-center items-center bg-gray-900 text-white text-center">
        <h1 class="text-6xl font-bold my-4">The Ultimate Online Cookbook!</h1>
        <h2 class="text-gray-300">This is the ultimate online cookbook where you can find recipes based on what you have in your kitchen and get dinner suggestions!</h2>
        <div class="flex flex-row items-center justify-center my-6 gap-4">
            <NuxtLink to="/auth/login"><button class="py-3 px-6 border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 rounded">Log In</button></NuxtLink>
            <NuxtLink to="/browse"><button class="py-3 px-6 border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 rounded">Browse Recipes <font-awesome-icon icon="fas fa-arrow-right-long" /></button></NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
