<template>
    <div>
        <h1 class="text-center"> Form elements </h1>
        <Input inputType="text" placeholder="Enter username" labelId="username" />
        <Input inputType="password" placeholder="Enter password" labelId="password" class="" />
        <Button btnType="button" textContent="SIGN UP" class="bg-green-500 text-white" />
        <Card>
            <img src="https://picsum.photos/id/376/320/210" alt="cover" class="rounded-xl">

            <div class="card-body p-3">
                <h1 class="card-title font-semibold text-xl my-2">
                    Card title lorem ipsum . . .
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime id accusamus eligendi fugit distinctio
                    porro, nihil itaque, suscipit sed asperiores eveniet quibusdam iusto!
                </p>

                <div class="flex gap-x-2 my-3">

                    <Button btnType="button" textContent="DISLIKE" class="bg-red-500 text-white" />
                    <Button btnType="button" textContent="LIKE" class="bg-green-500 text-white" />

                </div>
            </div>
        </Card>
    </div>
</template>

<script>

import Input from "../../ui/input.vue";
import Button from "../../ui/Button.vue";
import Card from "../../ui/Card.vue";

export default {
    name: "Form",

    components: {
        Input,
        Button,
        Card
    },

    props: {
        inputType: String,
        placeholder: String,
        labelId: String,
        btnType: String,
        textContent: String,
    }
}
</script>

<style ></style>