export default defineNuxtRouteMiddleware((to,from)=>{
   const isUserAuthenticated=false;
    // const publicPages = ['/login', '/register', '/about'];

    // console.log("to:",to);
    
    // // If the user is not authenticated and tries to access a protected page
    // if (!isUserAuthenticated && !publicPages.includes(to.path)) {
    //     return navigateTo('/login');
    // }
   // const isUserAuthenticated=userIsLoggedIn();
    if(!isUserAuthenticated){
        return navigateTo('/login');
    }
  
})