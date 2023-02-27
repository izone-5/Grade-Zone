import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from "./MockApi.json";
const db = data;
const mock = new MockAdapter(axios, { delayResponse: 0 });
// mock.onGet(/\/users\/[^/]+/).reply(function (config) {
//   // the actual id can be grabbed from config.url
//   const { email } = config.url.match(/\/users\/(?<email>[^/]+)/).groups;
//   const user = db.profiledata.find(user =>user.email == email)
//   return [200, user];
// });

// mock.onPost(/\/users\/[^/]+/).reply((config=>{
// const { email } = config.url.match(/\/users\/(?<email>[^/]+)/).groups;
// const user = db.profiledata.find(user =>user.email == email)
// if(!user){
//   db.profiledata.push(JSON.parse(config.data))
//   return[200, db.profiledata.find(user =>user.email == email)]
// }
// return[200,'user already exists']
  
// }))
mock.onPost("/users").reply((config=>{
  const data=JSON.parse(config.data)
    db.profileData.push( data)
  return[200,db.profileData]
}  
)
  
)