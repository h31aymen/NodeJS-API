import * as Yup from 'yup';


const addUser= {
    schema: {
      body: Yup.object().shape({
        name: Yup.string(),
        email:Yup.string().email(),
        country: Yup.string(),
        age: Yup.number()
      })
    }
}

const getUser={
    schema: {
        params:Yup.object().shape({

        })
    }
}

const updateUser= {
    schema: {
        body: Yup.object().shape({
          name: {
            name: Yup.string(),
            email:Yup.string().email(),
            country: Yup.string(),
            age: Yup.number()
          }
        }),
        params:Yup.object().shape({
            id: Yup.number().required()
        })
      }
}
export default {
    getUser, addUser, updateUser
}