const router = require("express").Router();

const Channels = require("./channels-model");
const restricted = require("../../auth/restrictedMiddleware");
const checkRole = require("../../auth/CheckRoleMiddleware");

router.get("/", restricted, (req, res) => {
  Channels.getAllChannels()
    .then(channels => {
      res.json(channels);
    })
    .catch(error => res.send(error.message));
});

router.get("/:id", restricted, (req, res) => {
  Channels.getChannelByID(req.params.id)
    .then(channel => {
      res.json(channel);
    })
    .catch(error => res.send(error.message));
});

router.post("/", restricted, (req, res) => {
  Channels.addChannel(req.body)
    .then(channel => {
      res.status(201).json(channel);
    })
    .catch(error => {
      res.status(500).json({ message: "server error adding channel" }, error.message);
    });
});

router.put("/:id", restricted, async (req, res) => {
  try {
    const updatedChannel = await Channels.updateChannel(req.params.id, req.body);
    if (updatedChannel) {
      res.status(200).json(updatedChannel);
    } else {
      res.status(404).json({ message: "channel not found" });
    }
  } catch ({ message }) {
    res.status(500).json({ message }, { message: "server error updating channel" });
  }
});

router.delete("/:id", restricted, (req, res) => {
  Channels.removeChannel(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "channel deleted" });
      } else {
        res.status(404).json({ message: "channel not found" });
      }
    })
    .catch(error => {
      res.status(500).json(error.message, { message: "server error deleting channel" });
    });
});

module.exports = router;
