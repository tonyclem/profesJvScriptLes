// let userList = [];

// write a function, which will add the user to the userList argument supplied and make sure no duplicates are added.
const logUser = (userList, user) => {
  if (!userList.includes(user)) {
    userList.push(user);
  }
  //   if (userList.indexOf(user) === -1) {
  //     userList.push(user); // same as above
  //   }
};

// write a function, which will remove the user from the userList argument supplied in the argument.
const userLeft = (userList, user) => {
  const userIndex = userList.indexOf(user);
  if (userIndex > -1) {
    userList.splice(userIndex, 1);
  }
};

// define a function, which will return the number of users currently inside the list.
const numUsers = (userList) => {
  return userList.length;
};

// define a function, we will create a user array and call the function, we declared previously, to test our implementation.
const runSite = () => {
  // your user list for your website
  const userList = [];
  //  Simulate user viewing the site
  logUser(userList, "Clement");
  logUser(userList, "Lion");
  logUser(userList, "King");
  logUser(userList, "Queen");
  logUser(userList, "user1");
  // user left your website
  userLeft(userList, "Lion");
  // More users viewing the site
  logUser(userList, "user2");
  logUser(userList, "user3");
  logUser(userList, "user4");
  // More users left the site
  userLeft(userList, "user1");
  userLeft(userList, "user2");
  userLeft(userList, "user3");
  console.log("Current users: ", userList.join(", "));
};

runSite();
