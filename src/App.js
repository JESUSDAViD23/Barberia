import React, { useDebugValue } from 'react';
import './App.css';
import {getAuth, signInAnonymously} from "firebase/auth";
import { messaging } from './firebase';
import { getToken, onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const loguearse =()=>{
  signInAnonymously(getAuth()).then(usuario=>console.log(usuario));
}

const activarMensajes = async ()=> {
  const token = await getToken(messaging,{
    vapidKey: "BPNiEih4H35tIMwFHeaD-7Q7tz1mNXscAhl_HKWbav1kNu7XRbJS5IIREIrkMax0qQnJk8ZuOF5_di2CfSOcOlM"
  }).catch(error => console.log("Tuviste un error al generar el token, papá"));


  if(token) console.log("tu token:",token);
  if(!token) console.log("no tienes token, rey");
}



function App() {
  return (
    
    <Layout className="mainLayout">
      <ToastContainer />
<button onClick={loguearse}> Loguearse</button>
<button
onClick={activarMensajes}
> Recibir noti</button>
            
    </Layout>
  );
}

export default App;
