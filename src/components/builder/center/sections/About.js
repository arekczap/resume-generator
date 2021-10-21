import React from 'react'
import styled from 'styled-components/macro'

import HeaderBuilder from 'components/shared/HeaderBuilder'
import Input from 'components/shared/Input'
import PhotoInput from 'components/shared/PhotoInput'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const About = (props) => {
  const { name, desc } = props.data

  return (
    <>
      <HeaderBuilder name={name} content={desc} />
      <Wrapper>
        <Input
          labelName={'Nazwa sekcji'}
          placeholderName={'Dane osobowe'}
          type={'text'}
          sectionId={props.sectionId}
          id={'sectionName'}
          fullWidth={true}
        />

        <Input
          labelName={'Imię'}
          placeholderName={'Jan'}
          type={'text'}
          sectionId={props.sectionId}
          id={'firstName'}
          fullWidth={false}
        />

        <Input
          labelName={'Drugie imię'}
          placeholderName={'Jakub'}
          type={'text'}
          sectionId={props.sectionId}
          id={'secondName'}
          fullWidth={false}
        />

        <Input
          labelName={'Nazwisko'}
          placeholderName={'Kowalski'}
          type={'text'}
          sectionId={props.sectionId}
          id={'lastName'}
          fullWidth={false}
        />

        <Input
          labelName={'Tytuł zawodowy'}
          placeholderName={'Inż.Budownictwa'}
          type={'text'}
          sectionId={props.sectionId}
          id={'subtitle'}
          fullWidth={false}
        />

        <PhotoInput
          headerText={'Dodaj swoje zdjęcie'}
          hints={['Wybierz wyraźne zdjęcie', 'Fotografia powinna mieć jednolite tło']}
        />

        <Input
          labelName={'Adres'}
          placeholderName={'ul. Koralowa 3/43 \n21-100 Lublin'}
          type={'textfield'}
          sectionId={props.sectionId}
          id={'address'}
          fullWidth={true}
        />

        <Input
          labelName={'Numer telefonu'}
          placeholderName={'+48 744 235 543'}
          type={'text'}
          sectionId={props.sectionId}
          id={'phoneNumber'}
          fullWidth={false}
        />

        <Input
          labelName={'E-mail'}
          placeholderName={'areknowak@op.pl'}
          type={'text'}
          sectionId={props.sectionId}
          id={'email'}
          fullWidth={false}
        />

        <Input
          labelName={'Data urodzenia'}
          placeholderName={'DD-MM-YYYY'}
          type={'text'}
          sectionId={props.sectionId}
          id={'birthDate'}
          fullWidth={false}
        />

        <Input
          labelName={'Strona WWW'}
          placeholderName={'www.twoja-strona.pl'}
          type={'text'}
          sectionId={props.sectionId}
          id={'website'}
          fullWidth={false}
        />

        <Input
          labelName={'Linkedin'}
          placeholderName={'www.linkedin.com/in/imie-nazwisko'}
          type={'text'}
          sectionId={props.sectionId}
          id={'linkedinLink'}
          fullWidth={false}
        />

        <Input
          labelName={'Github'}
          placeholderName={'github.com/nazwa'}
          type={'text'}
          sectionId={props.sectionId}
          id={'githubLink'}
          fullWidth={false}
        />
      </Wrapper>
    </>
  )
}

export default About
