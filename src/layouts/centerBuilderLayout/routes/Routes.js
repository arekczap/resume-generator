import { Switch, Route } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router'

import { ResumeContext } from 'contexts/ResumeContext'
import { sidebarData } from 'data/SidebarData'
import routesData from './RoutesData'

const Routes = () => {
  const location = useLocation()
  const [elementData, setData] = useState({})
  const [state] = useContext(ResumeContext)

  //set data header name, desc to builder component
  useEffect(() => {
    sidebarData.forEach((item) => {
      item.subNav.forEach((item) => {
        if (item.path === location.pathname) {
          setData({
            name: item.title,
            desc: item.headingContent,
          })
        }
      })
    })
  }, [location.pathname])

  return (
    <>
      <Switch>
        {routesData.map((item, index) => {
          return (
            <Route
              path={item.path}
              render={() => {
                return (
                  <item.component
                    stateData={state[item.key]}
                    data={elementData}
                    sectionId={item.key}
                  />
                )
              }}
              key={index}
            />
          )
        })}
      </Switch>
    </>
  )
}

export default Routes