import api from "./index";

export const getAppointments = (profileId) =>
  api.get(`/appointments/${profileId}`);
