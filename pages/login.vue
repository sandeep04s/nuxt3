<script setup>
const isLoggedIn = userIsLoggedIn();
definePageMeta({
    layout: 'plain'
})

const loginUser = () => {
    isLoggedIn.value = true;
    useRouter().push('/');
}
</script>
<template>
    <form @submit.prevent="loginUser">
        <h1>Login page</h1>
        <label>Username
            <input type="text" name="username" /></label>
        <label>Password
            <input type="password" name="password" /></label>
        <button>Logged In</button>
    </form>
</template>