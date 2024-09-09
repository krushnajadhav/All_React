import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  './components/Header';
import Footer from './components/Footer';
import SideBar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/psots-list-store';


function App() {


const [selectedTab, setSelectedTab] = useState("Home");


  return (
    
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} onSetSelectedTab={setSelectedTab}></SideBar>
        <div className='content'>
          <Header></Header>
          {selectedTab === 'Home' ? 
          <PostList></PostList> : 
          <CreatePost></CreatePost>}
        
          <Footer></Footer> 
        </div>
      </div>
    </PostListProvider>
  );
} 

export default App
