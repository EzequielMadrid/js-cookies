const my_tweet = () => {
  let database = JSON.parse(localStorage.getItem("mensajes")) || [];
  let tweet = prompt("What is happening?");

  while (tweet === "" || tweet === null) {
    alert("TWEET EMPTY❓");
    tweet = prompt("What is happening?"); // declaramos tweet de vuelta
  }

  database.push(tweet);
  localStorage.setItem("posts", JSON.stringify(database));

  //console.log(`last tweet: ${tweet}`);
  document.write(`<h1>last tweet: ${tweet}</h1>`);
};
my_tweet();
