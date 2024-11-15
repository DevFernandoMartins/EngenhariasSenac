export default defineNuxtRouteMiddleware((to) => {
  const { user } = useAuth();
  
  if (to.path === '/perfil' && !user.value) {
    return navigateTo('/login');
  }
  
  if (to.path === '/login' && user.value) {
    return navigateTo('/perfil');
  }
});