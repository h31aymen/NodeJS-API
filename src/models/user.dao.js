import users from './data.model';

const getUser = (userId)=>{
    const gotten= users.find((user)=>{
        if (user.id === userId){
            // console.log(user);
            return true;
        }
    })
    console.log(gotten)
    return gotten;
}

const getUsers= ()=>{
    return users;
}
    
const updateUser= (userId, details)=>{
    const key=null;
    const users= users.map((user, index)=>{
        if (user.id === userId){
            key= index;
            user={...user, ...details};
        }
    })
    if(key != null)return users.key // i think if i returned 'key', and the checking will be in the routes file
    else return key;
}

const addUser= (details)=>{
    const metadata= {id: users.length+1, ...details};
    users.push(metadata);
    return metadata;  // returning the new user
}

const removeUser= (userId)=>{
    const doesUserExist= false;
    doesUserExist= users.find((user, index)=>{
        if (user.id === userId){
            users.splice(index, 1);
            return true;
        }
    })
    return doesUserExist // returning the removed user object
 }
export default{
    getUser, getUsers, updateUser, addUser, removeUser
}