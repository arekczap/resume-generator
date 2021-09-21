import React from 'react'
import * as GrIcons from 'react-icons/gr'

export const SidebarData = [
  {
    title: 'Napisz CV',
    icon: <GrIcons.GrTerminal />,
    iconClosed: <GrIcons.GrFormDown stroke={'white'} fill={'white'} />,
    iconOpen: <GrIcons.GrFormUp />,
    subNav: [
      {
        title: 'Dane osobowe',
        path: '/content/personalData',
        headingContent: 'Sugerujemy dodanie jak najwiekszej ilości informacji'
      },
      {
        title: 'Doświadczenie',
        path: '/content/experience',
        headingContent: 'Zacznij od opisu obecnego stanowiska, potem wymień wcześniejsze zajęcia.'
      },
      {
        title: 'Wykształcenie',
        path: '/content/education',
        headingContent: 'Wymień szkoły i uczelnie, do których uczęszczałeś.'

      },
      {
        title: 'Umiejętności',
        path: '/content/skills',
        headingContent: 'Wymień najważniejsze umiejętności i oceń ich poziom.'

      },
      {
        title: 'Podsumowanie',
        path: '/content/summary',
        headingContent: 'Przedstaw krótki opis swoich umiejętności, osiągnięć i doświadczenia.'

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
        title: 'Zainteresowania',
        path: '/content/interested',
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
        path: '/design/colors',
      },
      {
        title: 'Szablony',
        path: '/design/templates',
      },
      {
        title: 'Układ sekcji',
        path: '/design/sectionSetup',
      },
    ]
  }

]