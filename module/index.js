const { RouterAdmin } = require("./admin/admin.routes");


exports.apiRoute = (app) => {
  app.use("/api/v1/adm", RouterAdmin)


  app.get("/hello", (req,res)=>{
    res.send("Welcome To Private Route")
  });
}