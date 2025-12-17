
const ProfilePage = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQFeTg6HnDDnrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684348097108?e=1767830400&v=beta&t=PMM9icsnP2Ft6StDn7JLuKMWI28hAGta8pJrk3Cr2P8" 
          alt="Foto de Perfil" 
          className="profile-photo"
        />
        <div className="profile-info">
          <h1>Matheus Frantz de Faria</h1>
          <p className="profile-title">Desenvolvedor de Software | Engenheiro de Dados</p>
          <p className="profile-location">Brasil</p>
          <a href="https://www.linkedin.com/in/mffaria/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            Ver Perfil Completo no LinkedIn
          </a>
        </div>
      </header>
    </div>
  );
};

export default ProfilePage;
