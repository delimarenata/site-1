import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import EventHeader from 'components/organisms/event-header/event-header';
import EventFooter from 'components/organisms/event-footer/event-footer';
import ActivityCard from 'components/organisms/activity-card';
import { enhancedCodeGenerator } from 'utils/codeGenerator';
import {
  Container, EventCover, LinearBackground,
  EventLogo, EventDate, LinkBadge, Grid,
  BadgeContainer, Badge, ButtonAddTicket,
  Title, SmallText, Text, TicketAdded,
} from './event.style';
import { getDate, getEvent, verifyTicket } from './event.controller';
import Store from 'components/store/Store';
import ModalSympla from 'components/modals/modal-sympla/modal-sympla';
import AddTicketFromEvent from 'components/modals/add-ticket-from-event/add-ticket-from-event';
import { addTicket } from './event.controller';

const EventTemplate = ({ event_id }) => {
  const [event, setEvent] = useState({});
  const [hasTicket, setHasTicket] = useState({});
  const [simplaModal, setSimplaModal] = useState(false);
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [activitiesCurrent, setActivitiesCurrent] = useState([]);
  const [activitiesFuture, setActivitiesFuture] = useState([]);
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    getEvent(event_id, setEvent, setActivitiesCurrent, setActivitiesFuture);
  }, [])
  useEffect(() => {
    if (state.user && event.id){
      verifyTicket(state, event_id, setHasTicket);
    }
  }, [event, state.user])

  return (
    <Container>
      <EventHeader goBackMode />
      <EventCover cover={event.cover_url}>
        <LinearBackground>
          <EventLogo src={event.image_url} alt="Logo do evento" />
          <EventDate>{getDate(event)}</EventDate>
        </LinearBackground>
      </EventCover>
      <Grid>
        <Title>{event.name}</Title>
        {event.is_free ? <SmallText>Evento é gratuito</SmallText> : null}
        <LinkBadge href={'event.site_url'}> Site do evento </LinkBadge>
        <BadgeContainer>
          {(event.tags || []).map((item) => (
            <Badge key={enhancedCodeGenerator()}>{item}</Badge>
          ))}
        </BadgeContainer>
        <Text>{event.description}</Text>
        {
          hasTicket ? (
            <TicketAdded><Icon>check_circle</Icon>&nbsp;&nbsp;INGRESSO ADICIONADO</TicketAdded>
          ) : (
            <ButtonAddTicket
              onClick={() => setAddTicketModal(true)}
            >
              Já tenho um ingresso
            </ButtonAddTicket>
          )
        }
        <Text variant="warning">Acontecendo agora!</Text>
      </Grid>
      {
        activitiesCurrent.map((a) => (
          <ActivityCard
            key={a.id}
            backgroundUrl="/static/images/card-activity-big.png"
            activityName={a.title}
            activity={a}
          />
        ))
      }
      <Grid>
        <Text variant="default">Próximas Atividades</Text>
      </Grid>
      {
        activitiesFuture.map((a) => (
          <ActivityCard
            key={a.id}
            backgroundUrl="/static/images/card-activity-big.png"
            activityName={a.title}
            activity={a}
          />
        ))
      }
      {
        hasTicket ? null : (
          <EventFooter handleClick={() => setSimplaModal(!simplaModal)} />
        )
      }
      <ModalSympla
        opened={simplaModal}
        handleConfirmButton={() => console.log('handleConfirmButton')}
        handleCancelButton={() => setSimplaModal(!simplaModal)}
        handleBackButton={() => setSimplaModal(!simplaModal)}
        toSympla={() => window.open(event.ticket_url, '_blank').focus()}
        onCancel={() => setSimplaModal(!simplaModal)}
      />
      <AddTicketFromEvent
        opened={addTicketModal}
        handleConfirmButton={(payload) => addTicket(payload, state, event, dispatch, setAddTicketModal)}
        handleCancelButton={() => setAddTicketModal(!addTicketModal)}
      />
    </Container>
  );
};

export default EventTemplate;
