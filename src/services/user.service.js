import funcDAO from '../models/user.dao';

const get= (id)=>{
    return funcDAO.getUser(id);
}

const getAll= ()=>{
    return funcDAO.getUsers();
}

const update= (id, details)=>{
    return funcDAO.updateUser(id, details);
}

const add = (details)=>{
    return funcDAO.addUser(details);
}


const remove= (id)=>{
    return funcDAO.removeUser(id);
}

export default {
    get, getAll, update, add, remove
}