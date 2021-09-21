import { Switch, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'


import { SidebarData } from 'data/SidebarData'
import routesData from './RoutesData'

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
  }, [location.pathname])

  return (
    <>
      <Switch>
        {
          routesData.map((item, index) => {
            return <Route
              path={item.path}
              render={() => <item.component data={elementData} />}
              key={index}
            />
          })

        }

      </Switch>
    </>
  )
}

export default Routes
