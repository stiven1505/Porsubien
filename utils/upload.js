import multer from "multer";
/* Exporting the multer function to the rest of the application. */

module.exports = multer({dest: './uploads/'});