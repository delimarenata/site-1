import React from 'react';
import Link from 'next/link';
import {
  Navigation as NavigationComponent,
  NavigationItem,
  IDAContent,
  IDARegisterButton,
  IDALogo,
} from './navigation.style';

const Navigation = ({
  onIDASignin, textButton, column, closeMenu,
}) => {
  return (
    <NavigationComponent column={column}>
      {
        /* <NavigationItem column={column} onClick={closeMenu}>
        <Link href="/events">
          <a>Todos os eventos</a>
        </Link>
        </NavigationItem> */
      }
      <NavigationItem column={column} onClick={closeMenu}>
        <Link href="/faq">
          <a>PERGUNTAS FREQUENTES</a>
        </Link>
      </NavigationItem>
      <NavigationItem column={column} onClick={closeMenu}>
        <Link href="/narrative">
          <a>narrativa</a>
        </Link>
      </NavigationItem>
      <NavigationItem column={column} onClick={closeMenu}>
        <Link href="/use-terms">
          <a>Termos de uso</a>
        </Link>
      </NavigationItem>
      <NavigationItem column={column}>
        <IDARegisterButton
          type="button"
          onClick={() => {
            closeMenu();
            onIDASignin();
          }}
        >
          <IDALogo src="https://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons/brand.svg" alt="" /> 
          Cadastre-se
        </IDARegisterButton>
      </NavigationItem>
    </NavigationComponent>
  );
};

export default Navigation;
