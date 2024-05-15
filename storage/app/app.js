const my_tweet = () => {
  let database = JSON.parse(localStorage.getItem("mensajes")) || [];
  tweet = prompt("What is happening?");
  database.push(tweet);
  localStorage.setItem("mensajes", JSON.stringify(database));
  //console.log(`last tweet: ${tweet}`);
  document.write(`<h1>last tweet: ${tweet}</h1>`);
};
my_tweet();
