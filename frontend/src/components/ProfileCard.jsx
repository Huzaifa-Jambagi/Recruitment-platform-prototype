
const ProfileCard = ({ user }) => {
  const { email, profile, lastLogin } = user;
  const { fullName, headline, location, about } = profile;

  return (
    <div className="card mx-auto p-4" style={{ maxWidth: "600px", width: "100%" }}>
      <h3 className="card-title">{fullName}</h3>
      <h5 className="text-muted">{headline}</h5>
      <p className="mb-1">Email: {email}</p>
      <p className="mb-1">Location:{location}</p>
      <p className="mb-3">About: {about}</p>
      <p className="text-muted">
        Last Login: {new Date(lastLogin).toLocaleString()}
      </p>
    </div>
  );
};

export default ProfileCard;
