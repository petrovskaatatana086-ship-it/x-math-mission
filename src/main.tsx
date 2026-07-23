import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';

function App(){
 const [answer,setAnswer]=useState('');
 const [msg,setMsg]=useState('Пилот, активируй X-режим!');
 const ok=()=>Number(answer)===56?
 setMsg('⚡ Победа! Робот получил энергию!'):
 setMsg('🤖 Повтори расчет, пилот!');
 return <div className='app'>
 <h1>🤖 X-MATH MISSION</h1>
 <div className='robot'>ROBOT X</div>
 <div className='mission'>7 × 8 = ?</div>
 <input value={answer} onChange={e=>setAnswer(e.target.value)}/>
 <button onClick={ok}>АКТИВИРОВАТЬ</button>
 <p>{msg}</p>
 </div>
}
if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');
createRoot(document.getElementById('root')!).render(<App/>);
