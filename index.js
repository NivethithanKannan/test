import app from "./server.js";
const port = process.env.PORT || 5173

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})