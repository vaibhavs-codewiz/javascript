//handling api using fetch and applying async await and then catch
// async function getUser() {
//   try {
//     let obj = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await obj.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUser();

//same task using then catch (remember fetch returns promise)
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
return response.json();
}
)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
 console.log(error);
})
