import express from "express"
import { upload } from "./middleware/multer.js";
import { uploadController } from "./controller/imageController.js";

const app = express();
const PORT = process.env.PORT || 8000;


console.log(process.env.AWS_BUCKET_NAME)

app.get("/", (req, res) => {
   return res.status(200).json({
    message:"Hello server is running"
   })
})

app.post("/upload", upload.single("image"), uploadController )

app.listen(PORT, () => {
    console.log(`server running in port:${PORT}`)
})