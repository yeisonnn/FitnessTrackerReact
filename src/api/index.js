const BASE = 'https://guarded-stream-12358.herokuapp.com/';

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE}api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data, 'data');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userName, passWord, setToken) {
  fetch(`${BASE}api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username: userName,
        password: passWord,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      const userToken = result.data.token;
      localStorage.setItem('Token', userToken);
      setToken(userToken);
    })
    .catch(console.error);
}

export async function showMyInfo(token) {
  try {
    const data = await fetch(`${BASE}api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
