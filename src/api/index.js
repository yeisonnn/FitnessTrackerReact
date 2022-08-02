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
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
    try {
         const response = await fetch(`${BASE}api/users/login`,{
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
    return data;
    } catch (error) {
    throw error;
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function showPublicRoutines() {
    try {
      const response = await fetch(`${BASE}api/routines`,)
      const data = await response.json();
      console.log(data)
      return data
    } catch (error) {
      console.error(error);
    }
  }

  export async function showRoutinesByUser(username, token){
    try{
        const response = await fetch(`${BASE}api/:${username}/routines`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await response.json();
        return data
    } catch (error){
        throw error
    }
  }

  export async function showPublicRoutinesByUser(username){
    try{
        const response = await fetch(`${BASE}api/:${username}/routines`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        return data
    } catch (error){
        throw error
    }
  }

  export async function getActivities (){
    try {
        const response = await fetch (`${BASE}api/activities`)
        const data = response.json()
        return data
    } catch (error){
        throw error
    }
  }

  export async function createActivity(name, description, token){
    try{
        const response = await fetch (`${BASE}api/activities`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                description: description,
            })
            
        }) 
        const data = await response.json()
        return data
    } catch (error){
        throw error
    }
  }

  export async function editActivity(name, description, token, activityId){
    try {
        const response = await fetch (`${BASE}api/activities/:${activityId}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                description: description,
            })
        })
        const data = await response.json();
        return data;
    } catch (error){
        throw error
    }
  }

  export async function getAllPublicRoutinesbyActivityId(activityId){
    try {
        const response = await fetch (`${BASE}api/activities/:${activityId}/routines`)
    const data = await response.json()
    return data
    } catch (error){
        throw error
    }
  }

  export async function createRoutine(name, goal, isPublic, token){
    try{
        const response = await fetch (`${BASE}api/routines`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            })
            
        }) 
        const data = await response.json()
        return data
    } catch (error){
        throw error
    }
  }

  export async function editRoutine(name, goal, isPublic, routineId, token){
    try {
        const response = await fetch (`${BASE}api/routines/:${routineId}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            })
        })
        const data = await response.json();
        return data;
    } catch (error){
        throw error
    }
  }

  export async function deleteRoutine(token, routineId) {
    try {
      const response = await fetch(`${BASE}api/routines/:${routineId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  export async function attachActivityToRoutine(token, activityId, count, duration, routineId){
    try{
        const response = await fetch (`${BASE}api/routines/:${routineId}/activities`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                activityId: activityId,
                count: count,
                duration: duration,
            })
        })
        const data = await response.json();
        return data
    } catch (error){
        throw error
    }
  }

  export async function updateRoutineActivity(count, duration, token){
    try{
        const response = await fetch(`${BASE}api/routine_activities/:routineActivityId`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                count: count,
                duration: duration,
            })
        })
        const data = await response.json();
        return data

    } catch (error){
        throw error
    }
  }

  export async function deleteRoutineActivity(token){
    try {
        const response = await fetch(`${BASE}api/routine_activities/:routineActivityId`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
    });  
  }catch(error){
    throw error
    }
}