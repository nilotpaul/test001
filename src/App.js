import * as React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Array from './components/Array';
import Homepage from './components/Homepage';
import Header from './components/Header';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import String from './components/String';
import Searchsort from './components/Searchsort';
import Stackqueue from './components/Stackqueue';
import Matrix from './components/Matrix';
import Linkedlist from './components/Linkedlist';
import "./App.css"
// import { Button } from '@material-ui/core';

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// }); not required the dark theme anymore

function App() {

    return (
      
      
      <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route exact path= "/" element={<Homepage/>}/>
        <Route path= "/array" element={<Array/>}/>
        <Route path='/string' element={<String/>}/>
        <Route path='/linkedlist' element={<Linkedlist/>}/>
        <Route path='/matrix' element={<Matrix/>}/>
        <Route path='/searchsort' element={<Searchsort/>}/>
        <Route path='/stackqueue' element={<Stackqueue/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      

   );
}

export default App;
