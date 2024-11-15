export const useAuth = () => {
  const user = useState('user', () => null);

  const setUser = (userData) => {
    user.value = userData;
  };

  const logout = () => {
    user.value = null;
    navigateTo('/login');
  };

  return {
    user,
    setUser,
    logout
  };
}