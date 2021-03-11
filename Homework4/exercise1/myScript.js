

let firstTable = $("#myFirstTable");


let secondTable = $("#mySecondTable");


async function myFunction() {

    let response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let information1 = await response1.json();
    let getUserId = information1.userId;

    firstTable.append(`      <thead>
<tr>
  <th scope="col">BASIC INFO</th>
  <th scope="col">User Id</th>
  <th scope="col">Id</th>
  <th scope="col">Title</th>
  <th scope="col">Body</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">#</th>
  <td>${information1.userId}</td>
  <td>${information1.id}</td>
  <td>${information1.title}</td>
  <td>${information1.body}</td>
</tr>
</tbody>`);

    let response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${getUserId}`);
    let information2 = await response2.json();

    secondTable.append(`      <thead>
<tr>
  <th scope="col">ADDITIONAL INFO</th>
  <th scope="col">Name</th>
  <th scope="col">Username</th>
  <th scope="col">Email</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">#</th>
  <td>${information2.name}</td>
  <td>${information2.username}</td>
  <td>${information2.email}</td>
</tr>
</tbody>`);

}

myFunction();