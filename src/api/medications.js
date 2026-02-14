

import api from "./index";

export const getMedications = (profileId) =>
  api.get(`/profiles/${profileId}/medications`);
