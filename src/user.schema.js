import * as Yup from 'yup';


const addUser= {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
        name: Yup.string(),
        email:Yup.string().email(),
        country: Yup.string(),
        age: Yup.number()
      })
    }
  }
}

const getUser={
  schema: {
      params:{
        yupSchema: Yup.object().shape({
          id: Yup.number().required()
        })
      }
  }
}

const updateUser= {
  schema: {
    body: {
      yupSchema: Yup.object().shape({
            name: Yup.string(),
            email:Yup.string().email(),
            Country: Yup.string(),
            Age: Yup.number()
      })
    },
    params:{
      yupSchema: Yup.object().shape({
          id: Yup.number().required()
      })
    } 
  }
}  
export default {
    getUser, addUser, updateUser
}