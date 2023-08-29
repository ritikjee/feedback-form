import Header from '../copmonents/Header'
import FeedbackList from '../copmonents/FeedbackList';
import FeedbackStats from '../copmonents/feedbackStats';
import FeedbackForm from '../copmonents/FeedbackForm';
import AboutPage from '../pages/AboutPage';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AbouIconComponents from '../copmonents/AbouIconComponents';
import { FeedbackProvider } from '../copmonents/context/FeedbackContext';

// import FeedbackItem from '../copmonents/FeedbackItem';

function App() {
  
  return (
    <FeedbackProvider>
  <Router>
  <Header text = "Feedback UI"/>
  <div className="container">
 <Routes>
    <Route exact path='/' element={<>
  <FeedbackForm />
  <FeedbackStats/>
  <FeedbackList/>
  
    </>} />

  <Route path ='/about' element={<AboutPage/>}/>
  </Routes>
{/* <Route path='/about'>This is about page</Route> */}


  </div>
  <AbouIconComponents/>
  </Router>
  </FeedbackProvider>
  );
}

export default App
