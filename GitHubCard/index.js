followersArray.forEach(user => {
  axios
  .get(`https://api.github.com/users/${user}`)
  .then (response => {
    // console.log(response.data);
    console.log(cards);
      const card = gitCard(response.data);
      cards.appendChild(card);
    })
  .catch (error => {
    console.log('Nope. Try again.', error)})
});


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function gitCard(user) {
  const 
    card = document.createElement('div'),
    imageURL = document.createElement('img'),
    cardInfo = document.createElement('div'),
    name = document.createElement('h3'),
    userName = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    profileURL = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

    card.appendChild(imageURL);
    card.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
    profile.appendChild(profileURL);

    card.classList.add('card');
    imageURL.classList.add('cardImg');
    name.classList.add('name');
    userName.classList.add('username');

    imageURL.src = user.avatar_url;
    name.textContent = user.name;
    userName.textContent = user.login;
    location.textContent = `Location: ${user.location}`;
    profile.textContent = `Profile`;
    profileURL.src = user.url;
    followers.textContent = `Followers: ${user.followers}`;
    following.textContent = `Following: ${user.following}`;
    bio.textContent = `Bio: ${user.bio}`;
}