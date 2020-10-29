import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animation } from '@resystem/design-system';
import {
  disabilitiesCollection,
  gendersCollection,
  sexualOrientationCollection,
  skinColorCollection,
  statesCollection,
} from 'collections';
import SimpleSelect from 'components/atoms/select/select';
import SwitchButton from 'components/atoms/switch-button/switch-button';
import {
  Title,
  Space,
  SpaceSmall,
  Wrapper,
  Modal,
} from './complete-registration.style';
import Button from '../../atoms/button/button';
import CancelButton from '../../atoms/cancel-button/cancel-button';
import SimpleInput from '../../atoms/simple-input/simple-input';
import {
  validateCPF,
  emailValidation,
  dateValidation,
  cpfValidation,
  maskCPF,
  maskDate,
} from '../../../utils/validations';

import {
  getUser,
  getAllUsers,
  getEvent,
  getAllEvents,
} from './complete-registration.controller';

const CompleteRegistration = ({
  cpf,
  firstName,
  lastName,
  birthDate,
  email,

  skinColor,
  gender,
  sexualOrientation,
  city,
  country,
  age,
  desability,

  opened,
  handleConfirmButton,
  handleCancelButton,
}) => {
  /* values */
  const [cpfInput, setCpfInput] = useState('');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [birthDateInput, setBirthDateInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [buttonDisable, setButtonDisable] = useState(false);

  /*  required fields */
  const [skinColorInput, setSkinColorInput] = useState('');
  const [genderInput, setGenderInput] = useState('');
  const [sexualOrientationInput, setSexualOrientationInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [ageInput, setAge] = useState(0);
  const [isDesabilityInput, setIsDesabilityInput] = useState(false);
  const [desabilityInput, setDesabilityInput] = useState('');

  /* erros */
  const [cpfError, setCpfError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [emailError, setEmailError] = useState('');

  /*  required fields errors */
  const [skinColorError, setSkinColorError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [sexualOrientationError, setSexualOrientationError] = useState('');
  const [cityError, setCityError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isDesabilityError, setIsDesabilityError] = useState('');
  const [desabilityError, setDesabilityError] = useState('');

  const hasError = (string) => {
    console.log('has error ', string, !!string);
    return !!string;
  };
  const simpleInputValidation = (string) =>
    string.length === 0 ? 'Campo inválido' : '';

  function handleConfirmButtonClick() {
    handleConfirmButton({
      cpf: cpfInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      birthDate: birthDateInput,
      email: emailInput,
    });
  }

  function handleIgnoreButtonClick() {
    handleCancelButton();
  }

  useEffect(() => {
    if (firstName) setFirstNameError(simpleInputValidation(firstNameInput));
    if (lastName) setLastNameError(simpleInputValidation(lastNameInput));
    if (cpf) setCpfError(cpfValidation(cpfInput));
    if (birthDate) setBirthDateError(dateValidation(birthDateInput));
    if (email) setEmailError(emailValidation(emailInput));
    if (
      hasError(firstNameError) ||
      hasError(lastNameError) ||
      hasError(cpfError) ||
      hasError(birthDateError) ||
      hasError(emailError)
    ) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  }, [firstNameInput, lastNameInput, cpfInput, birthDateInput, emailInput]);

  useEffect(() => {
    // getAllUsers('5f987a8bd1298b6768b78001');
    //  getAllEvents();
    // const event = getEvent('5f987a8bd1298b6768b78112');
    setButtonDisable(true);
  }, []);

  /* onChanges */
  const handleOnChangeFirstName = ({ target }) => {
    setFirstNameInput(target.value);
    setFirstNameError(simpleInputValidation(target.value));
  };

  const handleOnChangeLastName = ({ target }) => {
    setLastNameInput(target.value);
    setLastNameError(simpleInputValidation(target.value));
  };

  const handleOnChangeBirthDate = ({ target }) => {
    setBirthDateInput(maskDate(target.value));
    setBirthDateError(dateValidation(target.value));
  };

  const handleOnChangeCPF = ({ target }) => {
    const value = target.value.replace(/[^\w\s]/gi, '');
    setCpfError(cpfValidation(value));
    setCpfInput(maskCPF(value));
  };

  const handleOnChangeEmail = ({ target }) => {
    const { value } = target;
    setEmailError(emailValidation(value));
    setEmailInput(value);
  };

  /* onChanges required */

  const handleOnChangeSkinColor = (event) => {
    setSkinColorInput(event.target.value);
  };

  const handleSelectChange = (event, inputName) => {
    switch (inputName) {
      case 'skinColor':
        setSkinColorInput(event.target.value);
        break;
      case 'gender':
        setGenderInput(event.target.value);
        break;
      case 'sexualOrientation':
        setSexualOrientationInput(event.target.value);
        break;
      case 'country':
        setCountryInput(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleOnChangeCity = (event) => {
    setCityInput(event.target.value);
  };

  return (
    <Wrapper opened={opened}>
      <Animation
        animation="slideInUp"
        duration="400ms"
        customStyle="width: 100%;"
      >
        <Modal>
          <Title>Complete seu cadastro para acessar o evento!</Title>
          <Space />
          <Space />
          {!skinColor && (
            <SimpleSelect
              placeholder="Selecione sua cor de pele"
              value={skinColorInput}
              onChange={(event) => handleSelectChange(event, 'skinColor')}
              error={skinColorError}
              options={skinColorCollection}
            />
          )}
          <SpaceSmall />
          {!gender && (
            <SimpleSelect
              placeholder="Selecione seu gênero"
              value={genderInput}
              onChange={(event) => handleSelectChange(event, 'gender')}
              error={genderError}
              options={gendersCollection}
            />
          )}
          <SpaceSmall />
          {!sexualOrientation && (
            <SimpleSelect
              placeholder="Selecione sua orientação sexual"
              value={sexualOrientationInput}
              onChange={(event) =>
                handleSelectChange(event, 'sexualOrientation')
              }
              error={sexualOrientationError}
              options={sexualOrientationCollection}
            />
          )}
          <SpaceSmall />
          {!country && (
            <SimpleSelect
              placeholder="Selecione seu estado"
              value={countryInput}
              onChange={(event) => handleSelectChange(event, 'country')}
              error={countryError}
              options={statesCollection}
            />
          )}
          <SpaceSmall />
          {!city && (
            <SimpleInput
              placeholder="Digite sua cidade"
              value={country}
              onChange={handleOnChangeCity}
              error={countryError}
            />
          )}
          <Space />
          <SwitchButton
            options={[
              {
                id: 'sim',
                label: 'sim',
              },
              {
                id: 'não',
                label: 'não',
              },
            ]}
          />
          <Button disabled={buttonDisable} onClick={handleConfirmButtonClick}>
            {' '}
            Continuar
          </Button>
          <Space />
          <CancelButton onClick={handleIgnoreButtonClick}>Ignorar</CancelButton>
        </Modal>
      </Animation>
    </Wrapper>
  );
};

CompleteRegistration.propTypes = {
  cpf: PropTypes.bool,
  firstName: PropTypes.bool,
  lastName: PropTypes.bool,
  birthDate: PropTypes.bool,
  email: PropTypes.bool,
  opened: PropTypes.bool,
  handleConfirmButton: PropTypes.func,
  handleCancelButton: PropTypes.func,
};

CompleteRegistration.defaultProps = {
  cpf: false,
  firstName: false,
  lastName: false,
  birthDate: false,
  email: false,
  opened: false,
  handleConfirmButton: () => {},
  handleCancelButton: () => {},
};

export default CompleteRegistration;
