import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setİsLoading] = useState(false);

  useEffect(() => {
    const retrievedObject = JSON.parse(localStorage.getItem("userInfo"))
    
    setFullName(retrievedObject.fullName);
    setEmail(retrievedObject.email);
    setPassword(retrievedObject.password);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setİsLoading(true);

    setTimeout(() => {
      const user = {
        fullName,
        email,
        password,
      };

      localStorage.setItem("userInfo", JSON.stringify(user));
      setİsLoading(false);
    }, 1000);
  };

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="upper-img">
          <img
            width="100%"
            src="https://free4kwallpapers.com/uploads/originals/2020/09/03/minimal-sunset-scenery-wallpaper.jpg"
            alt=""
          />
        </div>

        <div className="profile-overview">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/100.png" alt="" />
            <h4>{fullName}</h4>
          </div>
        </div>

        <div className="profile-informations">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-item">
                <label>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="eg. John Doe"
                  disabled={isLoading}
                />
              </div>
              <div className="input-item">
                <label>E-Mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eg. example@example.com"
                  disabled={isLoading}
                />
              </div>
              <div className="input-item">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 8 characters"
                  disabled={isLoading}
                />
              </div>
            </div>
            {isLoading && (
              <div className="button-area">
                <button type="submit">
                  Your Informations Saving to Local Storage...
                </button>
              </div>
            )}
            {!isLoading && (
              <div className="button-area">
                <button type="submit">Save</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
