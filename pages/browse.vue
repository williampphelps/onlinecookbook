<template>
    <div class="flex flex-col gap-10 h-screen justify-center items-center bg-gray-900 text-white text-center px-20">
        <h1 class="text-6xl font-bold my-4">Browse Recipes!</h1>
        <div class="flex flex-row flex-stretch items-center justify-center gap-4 w-full px-60">
            <input type="text" class=" py-3 px-6 bg-gray-200 shrink text-black rounded" placeholder="Search for a recipe..."></input>
            <button class="py-3 px-6 border-2 border-blue-500 grow text-blue-500 hover:text-white hover:bg-blue-500 rounded">Search Recipes <font-awesome-icon icon="fas fa-magnifying-glass" /></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BrowsePage'
}
</script>
