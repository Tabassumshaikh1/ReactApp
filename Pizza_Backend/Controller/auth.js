const register = require("../Model/Register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secret;
async function Register(req, res) {
  //hashing password
  const password = req.body.regisval.password;

  const updatedpass = await bcrypt.hash(password, 10);
  const data = req.body.regisval;
  const regisdata = new register({
    ...data,
    password: updatedpass,
  });

  regisdata.save();

  //create token
  const token = jwt.sign(
    {
      _id: regisdata._id,
      name: `${regisdata.name} `,

      email: regisdata.email,
   
    },
    secret
  );
  console.log("token is", token);

  res.send({ msg: "Registered Successfully" });
}
async function Login(req, res) {
  console.log(req.body);
  const data = req.body.loginval;
  console.log("Data", data);
  const checkdata = await register.find({ email: data.email });

  if (checkdata.length == 0) {
    res.send({ err: 1, msg: "You are Not register please register" });
  } else {
    const result = await bcrypt.compare(data.password, checkdata[0].password);
    if (!result) {
      res.send({ err: 1, msg: "Enter Valid Password " });
    } else {
      const token = jwt.sign(
        {
          _id: checkdata[0]._id,
          name: `${checkdata[0].name} `,

          email: checkdata[0].email,
        },
        secret
      );

      res.status(200).send({
        name: checkdata[0].name,
        id:checkdata[0]._id,
        email: checkdata[0].email,
        isAuthenticated: true,
        token: token,
        err: 0,
        msg: "User login SucessFull",
      });
    }
  }
}
async function GetUserById(req,res){
const data = await register.find({_id:req.body.id})
res.send(data)
}

module.exports = { Login, Register,GetUserById };
