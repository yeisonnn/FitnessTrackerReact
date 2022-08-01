const BASE = "https://guarded-stream-12358.herokuapp.com/";

export async function testing(){
    try {
    const response = await fetch(`${BASE}api/health`)
    const data = response.json()
    console.log(data)
    } catch(error) {
    throw error
    }
}
testing()