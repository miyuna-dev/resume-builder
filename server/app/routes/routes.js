const { verifySignUp, authJwt } = require("../middleware");
const userController = require("../controllers/userController");
const resumeController = require("../controllers/resumeController");
const router = require("express").Router();
const Router = require("express").Router();

module.exports = function (app) {
   app.use((req, res, next) => {
      res.header(
         "Access-Control-Allow-Headers",
         "x-access-token, Origin, Content-Type, Accept"
      );
      next();
   });
   
   router.post("/signup", verifySignUp.checkDuplicateEmail, userController.signup);
   router.post("/login", userController.login);
   router.post("/logout", authJwt.verifyToken, userController.logout);
   router.post("/refresh", userController.refreshToken);

   router.get("/user", authJwt.verifyToken, userController.userBoard);
   router.get("/user-infos", authJwt.verifyToken, userController.getUserInfos);

   app.use("/api/auth", router);

   /** RESUME */
   Router.post("/create", resumeController.createResume);
   Router.get("/list", resumeController.findAll);
   Router.get("/list/:id", resumeController.findOne);
   Router.put("/update/:id", authJwt.verifyToken, resumeController.update);
   Router.delete("/delete/:id", authJwt.verifyToken, resumeController.delete);
   Router.delete("/delete_all", authJwt.verifyToken, resumeController.deleteAll);
   
   app.use("/api/resume/", Router);
};