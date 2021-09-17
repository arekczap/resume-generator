import { Switch, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

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

import { SidebarData } from 'data/SidebarData'


const Routes = () => {
  const location = useLocation()
  const [elementData, setData] = useState({})



  //set data header name, desc to builder component
  useEffect(() => {
    SidebarData.forEach((item) => {
      item.subNav.forEach((item) => {
        if (item.path === location.pathname) {
          setData({
            name: item.title,
            desc: item.headingContent
          })
        }
      })
    })
  }, [location])

  return (
    <>
      <Switch>
        <Route
          path='/content/personalData'
          render={() => <About data={elementData} />}
        />
        <Route
          path='/design/colors'
          render={() => <ChangeColors data={elementData} />}
        />
        <Route
          path='/design/fonts'
          render={() => <ChangeFonts data={elementData} />}
        />
        <Route
          path='/content/clause'
          render={() => <CvClause data={elementData} />}
        />
        <Route
          path='/design/spacingAndMargins'
          render={() => <EditMargins data={elementData} />}
        />
        <Route
          path='/content/education'
          render={() => <Education data={elementData} />}
        />
        <Route
          path='/content/experience'
          render={() => <Experience data={elementData} />}
        />
        <Route
          path='/content/languages'
          render={() => <Languages data={elementData} />}
        />
        <Route
          path='/design/sectionSetup'
          render={() => <SectionSetup data={elementData} />}
        />
        <Route
          path='/content/skills'
          render={() => <Skills data={elementData} />}
        />
        <Route
          path='/content/summary'
          render={() => <Summary data={elementData} />}
        />
        <Route
          path='/design/templates'
          render={() => <Templates data={elementData} />}
        />
        <Route
          path='/content/interested'
          render={() => <Interested data={elementData} />}
        />
      </Switch>
    </>
  )
}

export default Routes
