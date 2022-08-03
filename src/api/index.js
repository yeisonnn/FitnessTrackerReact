// const BASE = 'https://guarded-stream-12358.herokuapp.com/';
const BASE = 'https://fitnesstrac-kr.herokuapp.com/';

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

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.messsage);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE}api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.messsage);
  }
}

export async function showMyInfo(token) {
  try {
    const response = await fetch(`${BASE}api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.messsage);
  }
}

export async function showPublicRoutines() {
  try {
    const response = await fetch(`${BASE}api/routines`);
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function showRoutinesByUser(username, token) {
  try {
    const response = await fetch(`${BASE}api/:${username}/routines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function showPublicRoutinesByUser(username) {
  try {
    const response = await fetch(`${BASE}api/:${username}/routines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getActivities() {
  try {
    const response = await fetch(`${BASE}api/activities`);
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createActivity(name, description, token) {
  try {
    const response = await fetch(`${BASE}api/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function editActivity(name, description, token, activityId) {
  try {
    const response = await fetch(`${BASE}api/activities/:${activityId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getAllPublicRoutinesbyActivityId(activityId) {
  try {
    const response = await fetch(
      `${BASE}api/activities/:${activityId}/routines`
    );

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createRoutine(name, goal, isPublic, token) {
  try {
    const response = await fetch(`${BASE}api/routines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function editRoutine(name, goal, isPublic, routineId, token) {
  try {
    const response = await fetch(`${BASE}api/routines/:${routineId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteRoutine(token, routineId) {
  try {
    const response = await fetch(`${BASE}api/routines/:${routineId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
  } catch (error) {
    console.error(error.message);
  }
}

export async function attachActivityToRoutine(
  token,
  activityId,
  count,
  duration,
  routineId
) {
  try {
    const response = await fetch(
      `${BASE}api/routines/:${routineId}/activities`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateRoutineActivity(count, duration, token) {
  try {
    const response = await fetch(
      `${BASE}api/routine_activities/:routineActivityId`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count: count,
          duration: duration,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteRoutineActivity(token) {
  try {
    const response = await fetch(
      `${BASE}api/routine_activities/:routineActivityId`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
  } catch (error) {
    console.error(error.message);
  }
}
