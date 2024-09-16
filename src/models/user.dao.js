import users from './data.model';
import pino from 'pino'
const pinoLogger= pino()

const getUser = (userId)=>{
    const gotten= users.find((user)=>{
        if (user.id === userId){
            // console.log(user);
            return true;
        }
    })
    pinoLogger.info("getting a User")
    console.log(gotten)
    return gotten;
}

const getUsers= ()=>{
    pinoLogger.info("getting all users")
    return users;
}
    
const updateUser= (userId, details)=>{
    var key=null
    users.map((user, index)=>{
        if (user.id == userId){
            key= index;
        }
    })
    users.splice(key, 1 )
    console.log(users)
    var tempUser={...users[key], ...details}
    users.splice(key, 0, tempUser)
    pinoLogger.info("Attempt to Updating user Info")
    return users[key] // i think if i returned 'key', and the checking will be in the routes file
}

const addUser= (details)=>{
    const metadata= {id: users.length+1, ...details};
    users.push(metadata);
    pinoLogger.info("Attempt of adding a User")
    return metadata;  // returning the new user
}

const removeUser= (userId)=>{
    var doesUserExist= false;
    doesUserExist= users.find((user, index)=>{
        if (user.id === userId){
            users.splice(index, 1);
            pinoLogger.info("removing a User");
            return true;
        }
    })
    return doesUserExist // returning the removed user object
 }
export default{
    getUser, getUsers, updateUser, addUser, removeUser
}