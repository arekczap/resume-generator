import React from 'react'
import * as GrIcons from 'react-icons/gr'



export const SidebarData = [
  {
    title: 'Napisz CV',
    path: '/content',
    icon: <GrIcons.GrTerminal />,
    iconClosed: <GrIcons.GrFormDown stroke={'white'} fill={'white'} />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Dane osobowe',
        path: '/content/personalData',
      },
      {
        title: 'Doświadczenie',
        path: '/content/experience',
      },
      {
        title: 'Wykształcenie',
        path: '/content/education',
      },
      {
        title: 'Umiejętności',
        path: '/content/skills',
      },
      {
        title: 'Podsumowanie',
        path: '/content/summary',
      },
      {
        title: 'Klauzula CV',
        path: '/content/clause',
      },
      {
        title: 'Języki obce',
        path: '/content/languages',
      },
      {
        title: 'Dodaj / usuń sekcję',
        path: '/content/manageSection',
      },
    ]
  },
  {
    title: 'Formatuj CV',
    path: '/design',
    icon: <GrIcons.GrEdit />,
    iconClosed: <GrIcons.GrFormDown />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Czcionki',
        path: '/design/fonts',
      },
      {
        title: 'Odstępy i marginesy',
        path: '/design/spacingAndMargins',
      },
    ]
  },
  {
    title: 'Zmień wygląd',
    path: '/design',
    icon: <GrIcons.GrBrush />,
    iconClosed: <GrIcons.GrFormDown />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Kolory',
        path: '/design/fonts',
      },
      {
        title: 'Szablony',
        path: '/design/schemas',
      },
      {
        title: 'Układ sekcji',
        path: '/design/sectionSetup',
      },
    ]
  }

]