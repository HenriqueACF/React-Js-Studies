const apiFetchPost = async (endpoint, body) =>{
    const res = await fetch(BASE+endpoint,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    });
}

const API = {
    login:async(email, password) =>{
       const json = await apiFetchPost(
           '/user/signin',
           {email, password}
       );
       return json;
    }
};

export default ()=>API;