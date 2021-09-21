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
    path: '/content/personalData',
    component: About,
  },
  {
    path: '/design/colors',
    component: ChangeColors,
  }, {
    path: '/design/fonts',
    component: ChangeFonts,
  }, {
    path: '/content/clause',
    component: CvClause,
  }, {
    path: '/design/spacingAndMargins',
    component: EditMargins,
  }, {
    path: '/content/education',
    component: Education,
  }, {
    path: '/content/experience',
    component: Experience,
  }, {
    path: '/content/languages',
    component: Languages,
  }, {
    path: '/design/sectionSetup',
    component: SectionSetup,
  }, {
    path: '/content/skills',
    component: Skills,
  }, {
    path: '/content/summary',
    component: Summary,
  }, {
    path: '/design/templates',
    component: Templates,
  }, {
    path: '/content/interested',
    component: Interested,
  }
]

export default routesData