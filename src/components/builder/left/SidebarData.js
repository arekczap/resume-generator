import React from 'react'
import * as GrIcons from 'react-icons/gr'
{/* <GrIcons fill="red" stroke="green" /> */}



export const SidebarData = [
  {
    title: 'Napisz CV',
    path: '/writecv',
    icon: <GrIcons.GrTerminal />,
    iconClosed: <GrIcons.GrFormDown stroke={'white'} fill={'white'} />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Dane osobowe',
        path: '/writecv/personalData',
      },
      {
        title: 'Doświadczenie',
        path: '/writecv/experience',
      },
      {
        title: 'Wykształcenie',
        path: '/writecv/education',
      },
      {
        title: 'Umiejętności',
        path: '/writecv/skills',
      },
      {
        title: 'Podsumowanie',
        path: '/writecv/summary',
      },
      {
        title: 'Klauzula CV',
        path: '/writecv/clause',
      },
      {
        title: 'Języki obce',
        path: '/writecv/languages',
      },
      {
        title: 'Dodaj / usuń sekcję',
        path: '/writecv/manageSection',
      },
    ]
  },
  {
    title: 'Formatuj CV',
    path: '/formatcv',
    icon: <GrIcons.GrEdit />,
    iconClosed: <GrIcons.GrFormDown />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Czcionki',
        path: '/formatcv/fonts',
      },
      {
        title: 'Odstępy i marginesy',
        path: '/formatcv/spacingAndMargins',
      },
    ]
  },
  {
    title: 'Zmień wygląd',
    path: '/changeView',
    icon: <GrIcons.GrBrush />,
    iconClosed: <GrIcons.GrFormDown />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Kolory',
        path: '/changeView/fonts',
      },
      {
        title: 'Szablony',
        path: '/changeView/schemas',
      },
      {
        title: 'Układ sekcji',
        path: '/changeView/sectionSetup',
      },
    ]
  }

]