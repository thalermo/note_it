import React from 'react';
import '../App.css';

const Header = (props) => {
  const handleToggleDarkMode = () => {
    if (props.themeMode === 'default' || props.themeMode === 'party-mode') {
      props.setThemeMode('night-mode');
    } else {
      props.setThemeMode('default');
    }
  };

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
