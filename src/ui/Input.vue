<template>
    <label :for="labelId" class="w-[300px] block my-3">
        <p class="text-indigo-500 my-2" v-if="placeholder">{{ placeholder }}</p>
        <input :type="inputType" :id="labelId" :placeholder="placeholder"
            class="p-3 w-full ring-2 focus:ring-cyan-700 focus:outline-none placeholder:text-slate-300">
    </label>
</template>

<script>

export default {
    name: "Input",

    props: {
        labelId: String,
        placeholder: String,
        inputType: String,
    }
}
</script>

<style></style>