import api from "./index";

export const getProfiles = () =>
  api.get("/profiles");
