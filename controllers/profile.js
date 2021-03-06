const handleProfileGet = (req, res, db) => {
    console.log(req.params);
    const { id } = req.params;
    db.select("*")
      .from("users")
      .where({
        id: id
      })
      .then(user => {
        if (user.length) {
          res.json(user[0]);
        } else {
          res.status(404).json("error getting user");
        }
      });
  }

  module.exports = {
      handleProfileGet:handleProfileGet
  }