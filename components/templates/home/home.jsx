import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import { IDARegisterButton } from '@resystem/design-system';
import Header from 'components/organisms/home-header/home-header';
import Footer from 'components/organisms/footer/footer';
import Button from 'components/atoms/button/button';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import LinkButton from 'components/atoms/link-button/link-button';
import {
  PageTemplate,
  ApresentationContent,
  InitialWrapper,
  Title,
  OasiLogo,
  Description,
  DownIllustration,
  DownButton,
  IDAContent,
  ContentAbout,
  IDASubtitle,
  IDALink,
  IDAText,
  WrapperButtonIDA,
  IDAContentWrapper,
  AboutPlataform,
  TextWrapper,
  AboutTitle,
  AboutDescription,
  Picture,
  AboutPlataformRow,
  AboutText,
  AboutTitleIllusttration,
  AboutOasi,
  AboutOasiWrapper,
  AboutOasiVideo,
  AboutOasiTextWrapper,
  AboutOasiTitle,
  AboutOasiDescription,
  NextEvent,
  NextEventTitle,
  NextEventSubtitle,
  NextEventDate,
  NextEventTags,
  NextEventActionsWrapper,
  NextEventEventsLink,
  NextEventDescription,
  NextEventInfoWrapper,
  NextEventMosaicIllustration,
} from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => {
  const router = useRouter();
  return (
    <PageTemplate>
      <InitialWrapper>
        <Header />
        <ApresentationContent>
          <Title>
            Conheça
            <span>Oasi</span>
            <OasiLogo src="/static/icons/oasi.svg" alt="" />
          </Title>
          <Description>
            Experimente formas diferentes de se encontrar e conectar com amigos,
            colaborar com eventos projetos, e realizar um novo mundo possível.
          </Description>
          <DownButton
            type="button"
            onClick={() => {
              document.querySelector('#ida-c2a').scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            <span>Descer para saber mais</span>
            <DownIllustration
              src="/static/icons/more-illustration.svg"
              alt=""
            />
          </DownButton>
        </ApresentationContent>
      </InitialWrapper>

      <IDAContent id="ida-c2a">
        <IDAContentWrapper>
          <ContentAbout>
            <IDASubtitle>
              Gostou? Vêm viver essa experiência com a gente!
            </IDASubtitle>
            <IDAText>
              Você já conhece a IDa? É um serviço de autenticação seguro e
              rápido!
              <br />E o seu cadastro na Oasi é com ela.
            </IDAText>
          </ContentAbout>
          <WrapperButtonIDA>
            <IDARegisterButton text="Entrar com IDa" dark />
            <IDALink href="/">
              <a>SAIBA MAIS SOBRE A IDa</a>
            </IDALink>
          </WrapperButtonIDA>
        </IDAContentWrapper>
      </IDAContent>

      <AboutOasi>
        <AboutOasiWrapper>
          <AboutOasiVideo>
            <iframe
              src="https://www.youtube.com/embed/kXtsZdAeGjk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AboutOasiVideo>
          <AboutOasiTextWrapper>
            <AboutOasiTitle>Oasi? Mas o que é isso?</AboutOasiTitle>
            <AboutOasiDescription>
              Ei você! Oasi é uma plataforma que absorve vários formatos, shows,
              festas, mostras, conferências, oficinas e encontros.
              <br />
              <br />
              Enfim, uma nova forma de construir eventos e experiências
              coletivas. Fica o convite pra fazer e realizar esse mundo com a
              gente. Explorar!
            </AboutOasiDescription>
          </AboutOasiTextWrapper>
        </AboutOasiWrapper>
      </AboutOasi>

      <AboutPlataform>
        <AboutPlataformRow reverse>
          <Picture src="/static/images/grid-1.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-1-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Saudações, Nômade!</AboutTitle>
              <AboutDescription>
                Navegações diferentes pra você assistir o seu artista favorito!
                Fazer aquela reunião interativa e multimídia, ou expor seus
                produtos? Conheça a plataforma! Conheça oasi.
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
        <AboutPlataformRow>
          <Picture src="/static/images/grid-2.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-2-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Um mundo feito de encontros</AboutTitle>
              <AboutDescription>
                Uma nova forma de experimentar o coletivo, com amigos novos,
                amigos antigos ou até seus artistas favoritos, te espera!
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
        <AboutPlataformRow reverse>
          <Picture src="/static/images/grid-3.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-3-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Galerias e Exposições</AboutTitle>
              <AboutDescription>
                Curadoria sempre envolvida com os eventos e temas da plataforma,
                dos mais diversos. Pra espalhar a palavra de tudo que a gente
                ama.
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
        <AboutPlataformRow>
          <Picture src="/static/images/grid-4.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-4-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Feira online </AboutTitle>
              <AboutDescription>
                Com um catálogo colaborativo, espaços de aprendizagem, encontros
                e paineis, muita troca e história pra ouvir e contar por aqui!
                Vai perder essa?
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
      </AboutPlataform>

      <NextEvent backgroundImg="/static/images/feira-bg.jpg">
        <NextEventMosaicIllustration
          src="/static/images/event-mosaic.svg"
          alt=""
        />
        <NextEventInfoWrapper>
          <NextEventTitle>Próximo evento</NextEventTitle>
          <NextEventSubtitle>Feira da Música de Fortaleza</NextEventSubtitle>
          <NextEventDate>de 5 a 8 de Novembro</NextEventDate>
          <NextEventTags>
            música - mostra de vídeoclipe - oficinas - hackatom - zona de
            propulsão
          </NextEventTags>
          <NextEventDescription>
            Cinco dias de muita música brasileira, com artistas locais e
            emergentes. Também vai rolar exposições com artistas de Fortaleza, e
            claro que não podia faltar a feirinha online, né?
          </NextEventDescription>
        </NextEventInfoWrapper>
        <NextEventActionsWrapper>
          <GradientButton
            customStyle={`
              > span {
                vertical-align: middle;
              }
            `}
            alt="Adquirir ingresso para a Feira da Música de Fortaleza de 5 a 8 de Novembro"
          >
            <Icon>local_grocery_store</Icon>
            Adquirir ingresso
          </GradientButton>
          <Button
            color="#404040"
            alt="Saiba mais sobre a Feira da Música de Fortaleza de 5 a 8 de Novembro"
          >
            Saiba mais
          </Button>
          <Link href="/">
            <LinkButton color="#FFFFFF">Ver todos os eventos</LinkButton>
          </Link>
        </NextEventActionsWrapper>
      </NextEvent>

      <Footer />
    </PageTemplate>
  );
};

export default Home;
