import AboutSection from 'layouts/centerBuilderLayout/sections/AboutSection/AboutSection'
import ChangeColorsSection from 'layouts/centerBuilderLayout/sections/ChangeColorsSection/ChangeColorsSection'
import ChangeFontsSection from 'layouts/centerBuilderLayout/sections/ChangeFontsSection/ChangeFontsSection'
import CvClauseSection from 'layouts/centerBuilderLayout/sections/CvClauseSection/CvClauseSection'
import EditMarginsSection from 'layouts/centerBuilderLayout/sections/EditMarginsSection/EditMarginsSection'
import EducationSection from 'layouts/centerBuilderLayout/sections/EducationSection/EducationSection'
import ExperienceSection from 'layouts/centerBuilderLayout/sections/ExperienceSection/ExperienceSection'
import LanguagesSection from 'layouts/centerBuilderLayout/sections/LanguagesSection/LanguagesSection'
import SetupSection from 'layouts/centerBuilderLayout/sections/SetupSection/SetupSection'
import SkillsSection from 'layouts/centerBuilderLayout/sections/SkillsSection/SkillsSection'
import SummarySection from 'layouts/centerBuilderLayout/sections/SummarySection/SummarySection'
import TemplatesSection from 'layouts/centerBuilderLayout/sections/TemplatesSection/TemplatesSection'
import InterestedSection from 'layouts/centerBuilderLayout/sections/InterestedSection/InterestedSection'


const routesData = [
  {
    key: 'profile',
    path: '/content/personalData',
    component: AboutSection,
  },
  {
    key: 'colors',
    path: '/design/colors',
    component: ChangeColorsSection,
  },
  {
    key: 'fonts',
    path: '/design/fonts',
    component: ChangeFontsSection,
  },
  {
    key: 'clause',
    path: '/content/clause',
    component: CvClauseSection,
  },
  {
    key: 'spacingAndMargins',
    path: '/design/spacingAndMargins',
    component: EditMarginsSection,
  },
  {
    key: 'education',
    path: '/content/education',
    component: EducationSection,
  },
  {
    key: 'experience',
    path: '/content/experience',
    component: ExperienceSection,
  },
  {
    key: 'languages',
    path: '/content/languages',
    component: LanguagesSection,
  },
  {
    key: 'sectionSetup',
    path: '/design/sectionSetup',
    component: SetupSection,
  },
  {
    key: 'skills',
    path: '/content/skills',
    component: SkillsSection,
  },
  {
    key: 'summary',
    path: '/content/summary',
    component: SummarySection,
  },
  {
    key: 'templates',
    path: '/design/templates',
    component: TemplatesSection,
  },
  {
    key: 'interested',
    path: '/content/interested',
    component: InterestedSection,
  }
]

export default routesData