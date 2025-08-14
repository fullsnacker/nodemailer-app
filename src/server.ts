import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Email service running on port ${PORT}`);
  console.log(`🔗 Try it at http://localhost:${PORT}/health`);
});
