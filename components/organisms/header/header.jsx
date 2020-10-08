import React from 'react';
<<<<<<< HEAD
 
import { IDARegisterButton, } from '@resystem/design-system';
import {
  IDALoginButton,
  BurgerIcon,
  Brand,
  Header as HeaderComponent,
} from './header.style';
=======
import PropTypes from 'prop-types';
import { IDALoginButton } from '@resystem/design-system';
import { BurgerIcon, Brand, Header as HeaderComponent } from './header.style';
>>>>>>> develop

/**
 * This is the Header component
 * @returns {React.Component} header component global
 */
const Header = ({ onIDASignin }) => (
  <HeaderComponent>
    <Brand
      onClick={() => {}}
      src="/static/images/dummy-brand.svg"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
    <div>
      <IDALoginButton onClick={onIDASignin} dark small text="Entrar" />
      <BurgerIcon
        onClick={() => {}}
        src="/static/icons/menu-burger.svg"
        alt="esse é icone do meenu, 3 linhas pretas na horizontal formando um sanduiche"
      /> 
    </div>
     
     
    <IDALoginButton
      onClick={(() => {})}
      src="/static/images/branco.png"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
   
 

  </HeaderComponent>
);

Header.propTypes = {
  onIDASignin: PropTypes.func.isRequired,
};

export default Header;
