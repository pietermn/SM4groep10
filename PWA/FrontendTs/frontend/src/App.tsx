import {BrowserRouter as Router, useNavigate } from "react-router-dom";
import Routes from "./routes/Routes";
import AppWrapper from "./layout/AppWrapper";
import "./App.scss";
import CarPageHeader from "./components/CarPageHeader";

function App() {
  return (
    <Router>  
        <AppWrapper>
          <Routes />
        </AppWrapper>  
      </Router>
  );
}

// export function App() {
  


//   return <div className="main-container">
//     <Routes>
//       <AppWrapper>
//         <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type={CarTypeEnum.minicooperside} colour='Orange'></CarCard>
//         <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km"></CarStatsCard>
//         <UserStatsCard driven={300} paid={346.68}></UserStatsCard>
//         <Navbar/>
//       </AppWrapper>
//   </Routes>
//   </div>;
// };


export default App;
