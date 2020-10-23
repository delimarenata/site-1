import React from 'react';
import Link from 'next/link';
import {
  Navigation as NavigationComponent,
  NavigationItem,
  IDAContent,
  IDARegisterButton,
  IDALogo,
} from './navigation.style';

const Navigation = ({ onIDASignin, textButton, column }) => {
  return (
    <NavigationComponent column={column}>
      <NavigationItem column={column}>
        <Link href="/">
          <a>Início</a>
        </Link>
      </NavigationItem>
      <NavigationItem column={column}>
        <Link href="/events">
          <a>Todos os eventos</a>
        </Link>
      </NavigationItem>
      <NavigationItem column={column}>
        <IDARegisterButton type="button" onClick={onIDASignin}>
          <IDALogo src="http://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons/brand.svg" alt="" /> 
          Cadastre-se
        </IDARegisterButton>
      </NavigationItem>
    </NavigationComponent>
  );
};

export default Navigation;
