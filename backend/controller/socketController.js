const connectDB = require("../models/connect");

const addCollaborator = async (req, res) =>
{
    const { collaboratorId, docId } = req.body;
    try
    {
        // Assuming `doc` is your Mongoose model
        const updatedDoc = await db.findOneAndUpdate(
            { _id: docId },
            { $push: { collaborators: collaboratorId } },
            { new: true }
        );

        // Check if the document was updated successfully
        if (!updatedDoc)
        {
            return res.status(404).json({ message: "Document not found" });
        }

        // Respond with the updated document or a success message
        res.status(200).json({ message: "Collaborator added successfully", updatedDoc });
    } catch (error)
    {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    addCollaborator
};
