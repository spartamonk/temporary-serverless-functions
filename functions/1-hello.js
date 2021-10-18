//domain/.netlify/functions/1-hello
// const person = {name: 'john'}
exports.handler = async(event, context)=> {

 return {
   statusCode: 200,
   // body: JSON.stringify(person),
   body: 'Our First Netlify Function Example',
 }
}

//alternate function without the async function and using callback functions

// exports.handler = (event, context, callback) => {
 
//   callback(null, {
//     statusCode: 200,
//     body: 'hello world!',
//   })
// }
