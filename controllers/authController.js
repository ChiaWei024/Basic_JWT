// Pulled in the simulated user database
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

//
const bcrypt = require("bcrypt");

// handle login
const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  // chk if user and pwd exist
  if (!user || !pwd) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  // find user
  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) {
    return res.sendStatus(401); // Unautherize
  }
  // chk password

  const match = await bcrypt.compare(pwd, foundUser.password);
  console.log(match);
  if (match) {
    // will add JWT auth in the future
    return res.json({ success: `User ${user} is logged in!` });
  } else {
    return res.status(401).json({ message: "Login failed." });
  }
};

//
module.exports = { handleLogin };
