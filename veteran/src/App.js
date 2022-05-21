import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Nav';
import GoogleIcon from '@mui/icons-material/Google';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWiomcVk7vxpEMp9JhfA6AZgKo81CLiJQ",
  authDomain: "veteran-1db97.firebaseapp.com",
  projectId: "veteran-1db97",
  storageBucket: "veteran-1db97.appspot.com",
  messagingSenderId: "274810854824",
  appId: "1:274810854824:web:6d844b069d7ad731b3519d",
  measurementId: "G-89LEDJ7J4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Feed/>}></Route>
        <Route path='/signIn' element={<SigninPage/>}/>
      </Routes>
    </div>
  );
}

export default App;


//Components

//singinPage

const SigninPage = () => {
  return (

    // left sections 
    <div className='container'>
      <section className='left'>
        <div className='img-container'>
        <img src="https://public-files.gumroad.com/ci5ek0wpe2cj4lqv4eju6ghg9epq" alt="Flowers in Chania"/>
        </div>
        <div className='tag-line'>

        </div>
      </section>

      {/* Right section  */}
      <section className='right' >

        <div className='signIn-btn'>

          <button className='google-btn'>Sign in with google</button>

        </div>

      </section>

    </div>
  )
}


//Feed

export const Feed = () => {
  return (
    <div>This is Feed</div>
  )
}


//data input page

//posts feed

//profile page
