import React from 'react';

// HEADER COMPONENT, contains the title, the toggle buttons 

function Header(props) {

  // --- THE LOGIC OF THE TOGGLE BUTTONS ---

  //  -> Dark mode 
  const handleToggleDarkMode = () => {
    if (props.themeMode === 'default' || props.themeMode === 'party-mode') {
      props.setThemeMode('night-mode');
    } else {
      props.setThemeMode('default');
    }
  };

  //  -> Party mode 
  const handleTogglePartyMode = () => {
    if (props.themeMode === 'default' || props.themeMode === 'night-mode') {
      props.setThemeMode('party-mode');
    } else {
      props.setThemeMode('default');
    }
  };

  return (
    <div className="header-box">
      <button
        className="btn-primary dark-mode--btn"
        onClick={handleToggleDarkMode}
      />
      <h1 className="header-box--app-title">Note it.</h1>
      <button
        className="btn-primary party-mode--btn"
        onClick={handleTogglePartyMode}
      />
    </div>
  );
};

export default Header;
