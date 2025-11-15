import express, { type Response } from "express";
import { routes } from "./routes/index.ts";
import swaggerUi from "swagger-ui-express";
import { openAiSpecFile } from "../openapispecfile.ts";
import cors from "cors";
import cookieParser from "cookie-parser";
import { otpStore } from "@repo/otp/otpStore";

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://naukriscore.com"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin"],
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/api/v2/employee", routes);

app.get("/health", (_, res) => {
  res.send("Backend is running");
});

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openAiSpecFile));

// for testing email
app.post("/test-email", async (_, res: Response): Promise<any> => {
  try {
    const emailRes = await otpStore.generateOtpForEmail(
      "contactkartikforwork@gmail.com",
      "kartik"
    );

    if (!emailRes) {
      return res.status(400).json({ message: "something went wrong" });
    }

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
});

app.listen(PORT, () => console.log("server is running on " + PORT));
