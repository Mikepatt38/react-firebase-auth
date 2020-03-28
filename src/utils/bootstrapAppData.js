import { getCurrentUser } from './auth';

async function bootstrapAppData() {
  const results = await getCurrentUser();
  console.log('BOOTSTRAP: ', results);
  if (!results) {
    return {
      user: null
    }
  }
  const { user } = results;
  return {
    user
  };
}

export { bootstrapAppData }