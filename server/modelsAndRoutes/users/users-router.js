const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("./users-model");

const restricted = require("../../auth/restrictedMiddleware");
const checkRole = require("../../auth/CheckRoleMiddleware");

router.get("/", restricted, (req, res) => {
  Users.getAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.send(error));
});

router.get("/:id", restricted, (req, res) => {
  Users.getUserByID(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(error => res.send(error));
});

router.put("/:id", restricted, async (req, res) => {
  try {
    const { id } = req.params;
    let newUser = req.body;

    const hash = bcrypt.hashSync(newUser.password, 14);
    newUser.password = hash;

    const updateUser = await Users.updateUser(id, req.body);

    updateUser
      ? res.status(200).json({ message: "successfully updated credentials" })
      : res.status(404).json({ message: "missing required fields" });
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.delete("/:id", restricted, (req, res) => {
  Users.removeUser(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "user deleted" });
      } else {
        res.status(404).json({ message: " user not found" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "server error deleting user" });
    });
});

module.exports = router;
