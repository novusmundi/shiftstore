import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const TeamContext = createContext();

export const useTeam = () => {
  return useContext(TeamContext);
};

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState(() => localStorage.getItem('team') || 'river');

  const updateTeam = (newTeam) => {
    setTeam(newTeam);
    localStorage.setItem('team', newTeam);
  };

  return (
    <TeamContext.Provider value={{ team, setTeam: updateTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

TeamProvider.propTypes = {
  children: PropTypes.node.isRequired,
};