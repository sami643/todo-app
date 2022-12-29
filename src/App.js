import Profile from "./Components/Profile";
import Login from "./Components/Login";
import signUp from "./Components/signUp";
import TaskHistory from "./Components/TaskHistory";
import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";

import NavBar from './Components/Nav';
import Home from './Components/Home'


function App() {
  return (
     <Router>
    
          {/* <Profile /> */}
<Routes>
          <Route path='/' element={<Home/>}/ >
    
        <Route exact path="/profile" element={<Profile />} />
            
        <Route exact path="/history" element={<TaskHistory />} />
            <Route exact path="/signUp" element={<signUp/>} />
          

    
        </Routes>
      
      </Router>

  )
}



export default App;
