import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import db from './db.json'


const mock = new MockAdapter(axios)

mock.onPost('/signup').reply(({url,data}) => {
    const newUser = JSON.parse(data)
  const  user = db.profileData.find(user => user.email === newUser.email)
  if (!user){
   db.profileData.push(newUser)
   return[200, db.profileData]
  }
  return[200, "User already exist"]
    
    
})
mock.onPost('/signin').reply(({url,data}) => {
    const newUser = JSON.parse(data)
  const  user = db.profileData.find(user => user.email === newUser.email && user.password == newUser.password)
  if (user) {
  return[200, user]
  }
  return[200, "Please signup"]   
})
// mock.onGet(/\/users\/[^/]+/).reply(function (config) {
//   // the actual id can be grabbed from config.url
//   const { email } = config.url.match(/\/users\/(?<email>[^/]+)/).groups;
//   const user = db.profiledata.find(user =>user.email == email)
//   return [200, user];
// });
