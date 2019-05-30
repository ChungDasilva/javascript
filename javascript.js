
//callback
// Execute hàm doThis với một function  andThenThis là param. doThis sẽ thực thi bất kỳ đoạn code nào bên trong nó và khi kết thúc andThenThis sẽ được thực thi
doThis(andThenThis)
// Bên trong doThis nó có tham chiếu được gọi là callback, nó chỉ là một biến giữ tham chiếu đến chức năng này
function andThenThis() {
  console.log('and then this')
}
// Tên param thì gì cũng được
function doThis(callback) {
  console.log('this first')
  
  // the '()' is when you are telling your code to execute the function reference else it will just log the reference
  // Gọi callback() là thực thi tham chiếu của hàm khác, nó sẽ chỉ log ra tham chiếu
  callback()
}



//Promises

function request(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
    xhr.ontimeout = function () {
      reject('timeout')
    }
    xhr.open('get', url, true)
    xhr.send();
  })
}

const userGet = `https://api.github.com/search/users?page=1&q=diep&type=Users`
const userRequest = request(userGet)

userRequest
  .then(handleUsersList)
  .then(repoRequest)
  .then(handleReposList)
  .catch(handleErrors)
  
function handleUsersList(users) {
  return JSON.parse(users).items
}

function repoRequest(users) {
  return Promise.all(users.map(function(user) {
    return request(user.repos_url)
  }))
}

function handleReposList(repos) {
  console.log('All users repos in an array', repos)
}

function handleErrors(error) {
  console.error('Something went wrong ', error)
}




//Async/Await
//https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await

function afterTwoSeconds(value) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(value) }, 2000);
  });
}

async function sumTwentyAfterTwoSeconds(value) {
  const remainder = afterTwoSeconds(20)
  return value + await remainder
}

sumTwentyAfterTwoSeconds(10)
  .then(result => console.log('after 2 seconds', result))



  