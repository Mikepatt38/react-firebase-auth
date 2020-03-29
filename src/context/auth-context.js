import React from 'react';
import { useNavigate } from 'react-router-dom';
import { database, auth } from "../utils/firebase";

const AuthContext = React.createContext()

function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
  let navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        handleUser(user);
      } else {
        handleUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  async function handleUserUpdateDB(user, extraData) {
    const db = database;
    await db
      .collection("users")
      .doc(user.uid.toString())
      .set({
        id: user.uid.toString(),
        email: user.email,
        ...(extraData.firstName ? { firstName: extraData.firstName } : {}),
        ...(extraData.lastName ? { lastName: extraData.lastName } : {})
      })
    setUser(user);
  }

  async function handleUser(user) {
    setUser(user);
  }

  const register = (email, password, extraData) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => handleUserUpdateDB(response.user, extraData));
  }

  const login = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(response => handleUser(response.user))
      .then(() => navigate('/dashboard'));
  }

  const logout = () => {
    return auth.signOut()
      .then(() => navigate('/'));
  }

  return {
    user,
    register,
    login,
    logout,
  }
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth }