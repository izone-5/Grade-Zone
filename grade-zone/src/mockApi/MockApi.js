import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import db from './MockApi.json'


const mock = new MockAdapter(axios)
console.log(db)
mock.onPost('/users').reply(({url,data}) => {
    const newUser = JSON.parse(data)
  const  user = db.profileData.find(user => user.email === newUser.email)
  if (!user){
   db.profileData.push(newUser)
   return[200,db.profileData]
  }
  return[200, "User already exist"]
    
    
})
