import { Suspense } from 'react'
import { BrowserRouter, Routes as AllRoutes, Route } from 'react-router-dom'
import PageLoader from '../layout/PageLoader'
import HomeScreen from '../pages/HomeScreen/HomeScreen'
import SafetyScreen from '../pages/SafetyScreen/SafetyScreen'
import StatsScreen from '../pages/StatsScreen/StatsScreen'
import UserScreen from '../pages/UserScreen/UserScreen'

export default function Routes() {
    return (
        <AllRoutes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="homescreen" element={<HomeScreen/>} />
                <Route path="safetyscreen" element={<SafetyScreen/>} />
                <Route path="statsscreen" element={<StatsScreen/>} />
                <Route path="userscreen" element={<UserScreen/>} />
        </AllRoutes>
    
    )
}
// <Suspense fallback={<PageLoader />}>
//     <Switch>
//         <Route exact path='/SafetyScreen' component={SafetyScreen} />
//         <Route exact path='/SafetyScreen' component={HomeScreen} />
//         <Route path='/'>
//             <Redirect to='/menu' />
//         </Route>
//     </Switch>
// </Suspense>
// import { Suspense } from 'react'
// import { Switch, Route, Redirect } from 'react-router'
// import PageLoader from '../layout/PageLoader'
// import MachineMonitoringPage from '../pages/machinemonitoring/MachineMonitoringPage'
// import ComponentHealthPage from '../pages/componenthealth/ComponentHealthPage';
// import LifespanPage from '../pages/lifespan/LifespanPage';

// export default function Routes() {
//     return (
//         <Suspense fallback={<PageLoader />}>
//             <Switch>
//                 <Route exact path='/chealth' component={ComponentHealthPage} />
//                 <Route exact path='/monitoring' component={MachineMonitoringPage} />
//                 <Route exact path='/lifespan' component={LifespanPage} />
//                 <Route path='/'>
//                     <Redirect to='/monitoring' />
//                 </Route>
//             </Switch>
//         </Suspense>
//     )
// }