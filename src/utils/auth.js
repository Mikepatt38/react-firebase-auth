import { database, auth } from "./firebase";

async function getUser(userId) {
  const db = await database;
  return db
    .collection("users")
    .doc(userId)
    .get()
    .then(user => {
      return user.data();
    });
}

async function registerUser(user, userDetails) {
  const db = await database;
  return db
    .collection("users")
    .doc(user.uid.toString())
    .set({
      id: user.uid.toString(),
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: user.email
    })
}

async function register(email, password, userDetails) {
  const response = await auth.createUserWithEmailAndPassword(email, password);
  await registerUser(response.user, userDetails);
  const user = await getUser(response.user.uid);
  return user;
}

async function login(email, password) {
  const response = await auth.signInWithEmailAndPassword(email, password);
  const user = await getUser(response.user.uid);
  return user;
}

async function logout() {
  return auth
    .signOut();
}

export { getUser, registerUser, register, login, logout }
