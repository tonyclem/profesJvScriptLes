const slowAPI = {
  getUsers: (callback) => {
    setTimeout(() => {
      callback(null, {
        status: "OK",
        data: {
          users: [
            {
              name: "Clement",
            },
            {
              name: "Lion ",
            },
          ],
        },
      });
    }, 2000);
  },

  // getCart
  getCart: (username, callback) => {
    setTimeout(() => {
      if (username === "Clement") {
        callback(null, {
          status: "OK",
          data: {
            cart: ["Biscuits", "Apple"],
          },
        });
      } else {
        callback(new Error("User not found"));
      }
    }, 500);
  },
};

function runRequest() {
  slowAPI.getUsers((error, respond) => {
    if (error) {
      console.log("Error occurred when running getUser");
      throw new Error("Error occurred");
    }
    console.log(respond);
  });
  slowAPI.getCart("Clement", (error, result) => {
    if (error) {
      console.error(error);
      throw new Error("Error occurred");
    }
    console.log(result);
  });
}

console.log(runRequest());
