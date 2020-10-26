import React from 'react';
import Link from 'next/link';

import { IDARegisterButton, Text, Subtitle } from '@resystem/design-system';
import {
  Footer as FooterComponent,
  IDAContent,
  Space,
  SpaceSmall,
  Navigation,
  NavigationItem,
  Wrapper,
  ContentAbout,
  WrapperButtonIDA,
  MediaSocial,
  Icon,
  Organization,
  BrandIcon,
} from './footer.style';

const Footer = () => {
  return (
    <FooterComponent>
      <IDAContent>
        <Wrapper>
          <ContentAbout>
            <Subtitle type="h3">
              Bora viver essa experiência mágica com a gente?
            </Subtitle>
            <Space />
            <Text>
              Você já conhece a IDa? É um serviço de autenticação seguro e
              rápido!
              <br />E o seu cadastro na Oasi é com ela.
            </Text>
          </ContentAbout>
          <WrapperButtonIDA>
            <IDARegisterButton text="Entrar com IDA" dark />
            <SpaceSmall />
            <Link href="/">
              <a>SAIBA MAIS SOBRE A IDa</a>
            </Link>
          </WrapperButtonIDA>
        </Wrapper>
      </IDAContent>
      <Navigation>
        <div>
          <NavigationItem>
            <Link href="/">
              <a>Início</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/events">
              <a>Todos os Eventos</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/faq">
              <a>Perguntas Frequentes</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/">
              <a>Política de Privicidade</a>
            </Link>
          </NavigationItem>
        </div>
        <MediaSocial>
          <a
            href="https://www.facebook.com/oasi.vc/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon src="/static/icons/facebookIcon.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/oasi.vc/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon src="static/icons/instagramIcon.svg" alt="" />
          </a>
          <a
            href="https://twitter.com/oasivc"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon src="static/icons/twitterIcon.svg" alt="" />
          </a>
        </MediaSocial>
      </Navigation>
      <Space />
      <Space />
      <Organization>
        <div>
          <Link href="/">
            <BrandIcon src="static/icons/oasi.svg" alt="" />
          </Link>
        </div>
        <div>
          <Icon src="static/icons/midia-ninja.svg" alt="" />
          <Icon src="static/icons/design-ativista.svg" alt="" />
          <Icon src="static/icons/zona-de-propulssao.svg" alt="" />
        </div>
      </Organization>
    </FooterComponent>
  );
};

export default Footer;
