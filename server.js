require("dotenv").config();
const express = require("express");
const app = express();
const customerRoutes = require("./routes/customerRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
const tableRoutes = require("./routes/tableRoutes");

app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/menu-items", menuItemRoutes);
app.use("/api/tables", tableRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
