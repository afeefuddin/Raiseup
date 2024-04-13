const { Startup } = require("../models/Startup");
const { User } = require("../models/User");

async function createStartup(req, res) {
  console.log(req.body);
  const {
    name,
    description,
    report,
    stocks,
    fundsRequired,
    domain,
    username,
    logo,
    websiteLink,
    useruid,
  } = req.body;

  // console.log(req.body);

  try {
    const user = await User.findOne({ useruid });
    if (user) {
      const startup = new Startup({
        name,
        description,
        report,
        stocks,
        fundsRequired,
        domain: domain.split(","),
        username,
        logo,
        websiteLink,
        fundsRecieved: 0,
        useruid: useruid,
      });
      await startup.save();
      res.send(startup);
    } else {
      res.status(400).send(error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = createStartup;
