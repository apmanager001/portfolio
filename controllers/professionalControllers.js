const Contact = require("../model/contactModel");



const postContactPro = async (req, res) => {
  try {
    const { email, message } = req.body;
    date = new Date();
    const contact = await Contact.create({
        location: 'Professional Contact',
        name: 'n/a',
        email,
        message

    });
    return res.json(contact);
  } catch (error) {
    console.log(error);
  }
};

const deleteContact = async (req, res) => {
  const { deleteId } = req.params;
  try {
    
    const deletedEntry = await Contact.findOneAndDelete({ _id: deleteId, });
    
    // Check if an entry was found and deleted
    if (!deletedEntry) {
      return res.status(404).json({
        error: "No entry found with the provided _id",
      });
    }

    // Return a success message or any other relevant response
    return res
      .status(205)
      .json({ message: "Message deleted successfully", deletedEntry });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postContactPro,
  deleteContact,
};