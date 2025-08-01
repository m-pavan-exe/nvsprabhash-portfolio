const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="w-80 h-96 overflow-hidden shadow-xl rounded-lg bg-muted">
        <img
          src="/lovable-uploads/995eb134-0d51-428c-99c0-69d21410f495.png"
          alt="Prabhash - AI ML Engineer"
          className="w-full h-full object-cover"
          style={{ objectPosition: '25% top' }}
          onError={(e) => {
            console.error('Failed to load profile image');
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Profile image loaded successfully');
          }}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
