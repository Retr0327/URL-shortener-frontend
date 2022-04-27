const isProduction: boolean = process.env.NODE_ENV !== "production";

const API: string = !isProduction ? "http://localhost:3000" : "/api";

const EXTERNAL_API: string = !isProduction
  ? "http://localhost:3000"
  : "http://api:3000";

export { API, EXTERNAL_API };
