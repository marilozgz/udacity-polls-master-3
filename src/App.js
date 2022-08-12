import React from 'react';
import { Routes , Route} from 'react-router-dom';
import DashBoard from './views/Dashboard';
//import LoginPage from './components/Login/loginPageForm';
import LoginSelect from './components/Login/loginSelect';
import LeaderBoardView from './views/Leaderboard';
import PollsPage from './views/PollsPage';
import CreatePoll from './views/CreatePoll';
import Missing from './components/Missing/Missing';
const App = () => {

  return (
    <div className="App">
      <Routes>  
        <Route path="/leaderboard" element={<LeaderBoardView />} />
        <Route path="/" exact element={<LoginSelect />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/questions/:id" element={<PollsPage/>}/>
        <Route path="/add" element={<CreatePoll/>}/>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
