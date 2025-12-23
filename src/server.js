require("dotenv").config();  // Load environment variables from .env file.

const app = require("./app");  // Import the Express application.

const PORT = process.env.PORT || 5000;  // Use the PORT from environment variables or default to 5000.

app.listen(PORT, () => {  // Start the server and listen on the specified port.
  console.log(`Server running on port ${PORT}`);
});
