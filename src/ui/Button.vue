<template>
    <button :type="btnType"
        class="py-2 px-4 text-medium  focus:ring-2 focus:ring-sky-500 focus:outline-none border rounded ">
        {{ textContent }}
    </button>
</template>
<script>

export default {
    name: "Button",

    props: {
        btnType: String,
        textContent: String,
    }
}

</script>

<style></style>