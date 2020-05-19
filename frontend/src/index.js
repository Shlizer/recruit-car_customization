fetch('/hello')
  .then((result) => result.json())
  .then((result) => console.log(result))
