import React from 'react';
import { Routes , Route} from 'react-router-dom';
import DashBoard from './views/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginSelect from './components/Login/loginSelect';
import LeaderBoardView from './views/Leaderboard';
import PollsPage from './views/PollsPage';
import CreatePoll from './views/CreatePoll';
import Missing from './components/Missing/Missing';
const App = () => {

  return (
    <div className="App">
      <Routes>  
        <PrivateRoute path="/leaderboard" element={<LeaderBoardView />} />
        <Route path="/" exact element={<LoginSelect />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <PrivateRoute path="/questions/:id" element={<PollsPage/>}/>
        <PrivateRoute path="/add" element={<CreatePoll/>}/>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
