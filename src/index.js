import express from "express"
import { upload } from "./middleware/multer.js";
import { uploadController } from "./controller/imageController.js";

const app = express();
const PORT = process.env.PORT || 8000;


app.get("/", () => {
    console.log("hello")
})

app.post("/upload", upload.single("image"), uploadController )

app.listen(PORT, () => {
    console.log(`server running in port:${PORT}`)
})