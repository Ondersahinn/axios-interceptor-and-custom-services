import { useEffect, useState } from 'react';
import { getPostDateService } from './api/service/generalService';
import './App.css';

function App() {

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    if (postData.length === 0) {
      getPostData();
    }
  })

  const getPostData = async () => {
    const res = await getPostDateService();
    if (!res.errStatus) {
      console.log(res);
      setPostData(res.data);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {postData.map((e) => {
            return (
              <li style={{textAlign:'left', listStyle:'none'}} key={e.id}>
                <h4>e.tile</h4>
                <p>{e.body}</p>
              </li>
            )
          })}
        </ul>

      </header>
    </div>
  );
}

export default App;
