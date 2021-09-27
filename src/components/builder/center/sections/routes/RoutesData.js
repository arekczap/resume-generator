import About from 'components/builder/center/sections/About'
import ChangeColors from 'components/builder/center/sections/ChangeColors'
import ChangeFonts from 'components/builder/center/sections/ChangeFonts'
import CvClause from 'components/builder/center/sections/CvClause'
import EditMargins from 'components/builder/center/sections/EditMargins'
import Education from 'components/builder/center/sections/Education'
import Experience from 'components/builder/center/sections/Experience'
import Languages from 'components/builder/center/sections/Languages'
import SectionSetup from 'components/builder/center/sections/SectionSetup'
import Skills from 'components/builder/center/sections/Skills'
import Summary from 'components/builder/center/sections/Summary'
import Templates from 'components/builder/center/sections/Templates'
import Interested from 'components/builder/center/sections/Interested'



const routesData = [
  {
    key: 'profile',
    path: '/content/personalData',
    component: About,
  },
  {
    key: 'colors',
    path: '/design/colors',
    component: ChangeColors,
  },
  {
    key: 'fonts',
    path: '/design/fonts',
    component: ChangeFonts,
  },
  {
    key: 'clause',
    path: '/content/clause',
    component: CvClause,
  },
  {
    key: 'spacingAndMargins',
    path: '/design/spacingAndMargins',
    component: EditMargins,
  },
  {
    key: 'education',
    path: '/content/education',
    component: Education,
  },
  {
    key: 'experience',
    path: '/content/experience',
    component: Experience,
  },
  {
    key: 'languages',
    path: '/content/languages',
    component: Languages,
  },
  {
    key: 'sectionSetup',
    path: '/design/sectionSetup',
    component: SectionSetup,
  },
  {
    key: 'skills',
    path: '/content/skills',
    component: Skills,
  },
  {
    key: 'summary',
    path: '/content/summary',
    component: Summary,
  },
  {
    key: 'templates',
    path: '/design/templates',
    component: Templates,
  },
  {
    key: 'interested',
    path: '/content/interested',
    component: Interested,
  }
]

export default routesData