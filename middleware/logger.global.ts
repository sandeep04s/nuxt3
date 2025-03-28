export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to,"fetch",from);
})
