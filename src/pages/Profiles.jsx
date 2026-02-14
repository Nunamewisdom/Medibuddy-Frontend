import { useEffect, useState } from "react";
import api from "../api/api";

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    api.get("/profiles")
      .then(res => setProfiles(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Profiles</h1>

      <ul>
        {profiles.map(profile => (
          <li key={profile._id}>
            {profile.name} ({profile.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
