import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  LEADERBOARD_PATH,
  PROFILE_SETTING_PATH,
  FORUM_PATH,
  PRESENTATION_PATH
} from '../../utils/constants';
import ButtonComponent from '../Button/Button';
import { SideNav, SideNavLink } from './Sidebar.styles';

const Sidebar = () => {
  const [isButtonAddTopic, setButtonAddTopic] = useState(false);
  const location = useLocation();

  const showButtonAddChat = (isPathForum: boolean) => {
    setButtonAddTopic(isPathForum);
  };

  useEffect(() => {
    showButtonAddChat(location.pathname === FORUM_PATH);
  }, [location.pathname]);

  return (
    <SideNav>
      <SideNavLink to={PROFILE_SETTING_PATH}>User</SideNavLink>
      <SideNavLink to={FORUM_PATH}>Forum</SideNavLink>
      <SideNavLink to={LEADERBOARD_PATH}>Leaderboard</SideNavLink>
      <SideNavLink to={PRESENTATION_PATH}>Presentation of the game</SideNavLink>
      {isButtonAddTopic && <ButtonComponent buttonText="Add topic" />}
      <ButtonComponent notPriority={true} buttonText="Play" />
    </SideNav>
  );
};
export default Sidebar;
