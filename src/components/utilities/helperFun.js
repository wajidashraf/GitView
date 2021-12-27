export const getLocalStorage = ()=>{
    const hireUsers = JSON.parse(localStorage.getItem("hireUser"));
    return hireUsers
}

export const setLocalStorage = (data)=>{
    localStorage.setItem("hireUser",JSON.stringify(data))
}
export const isAdded = (users, login)=>{
    const added = users?.filter(user=>{
        return user.login ==login
    })
    return added
}

