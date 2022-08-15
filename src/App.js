import { Routes , Route} from 'react-router-dom';
import DashBoard from './views/Dashboard';
import LoginPage from './components/Login/loginSelect';
import LeaderBoardView from './views/Leaderboard';
import PollsPage from './views/PollsPage';
import CreatePoll from './views/CreatePoll';
import { RequireAuth } from './utils/RequireAuth';
import Missing  from './components/Missing/Missing';
import NavBar from './components/Navbar/Navbar';

const App = () => {

  // Getting the data once the component mounts.
 
  return (
    <div className="App">
    <NavBar></NavBar>
      <Routes >  
      <Route path="/" exact element={<LoginPage />} />

       <Route element={<RequireAuth/>}>
       
        <Route path="/leaderboard" element={<LeaderBoardView />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/questions/:id" element={<PollsPage/>}/>
        <Route path="/add" element={<CreatePoll/>}/>
        </Route>
        <Route path="*" exact element={<Missing />} />
      </Routes>

    </div>
  );
}

export default App;
