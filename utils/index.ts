export const getCanonicalUrl = () => {
  return process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "http://localhost:3000";
};
