import {uploadToS3} from "../utils/uploadToS3.js"

export const uploadController = async (req, res) => {
    try {
        const image = req.file;
        const imageURL = await uploadToS3(req.file);

        return res.status(200).json({
            success:true,
            imageURL
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
        
    }
}