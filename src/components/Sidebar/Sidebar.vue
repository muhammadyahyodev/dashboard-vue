<template>
    <div v-if="toggled" class="bg-white w-[320px] min-h-screen shadow-lg">
        <a href="" class="text-2xl font-bold bg-white p-5 text-center block text-indigo-600"> ADMIN DASHOARD </a>
    
        <ul class="list mt-8">
            
            <li class="list_item py-1 px-2" v-for="item in navlink" :key="item.id">
                <a :href="item.link" class="flex rounded-lg shadow border text-lg items-center list__item-link bg-white p-4 min-w-full hover:bg-indigo-50 duration-300 font-medium">
                    <i class='bx text-2xl text-indigo-500 mr-3' :class="item.icon"></i><span>{{ item.title }}</span>
                </a>
            </li>
          
        </ul>

    </div>
</template>

<script>

import navlinks from '../../constants/navlinks';

export default {
    name: "Sidebar",
    props: {
        toggled: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            navlink: navlinks
        }
    }
}

</script>

<style scoped>
    /* .active {
        background-color: rgb(167, 8, 177);
        color: #fff !important;
        font-weight: 600 !important;
    } */
</style>