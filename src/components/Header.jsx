import React from 'react';
import '../App.css';

const Header = (props) => {
  const handleToggleDarkMode = () => {};

  return (
    <div className="header-box">
      <button
        className="btn-primary dark-mode--btn"
        onClick={handleToggleDarkMode}
      />
      <h1 className="header-box--app-title">Note it.</h1>
      <button className="btn-primary party-mode--btn" />
    </div>
  );
};

export default Header;
