import React,{useState,useEffect} from "react";
import { Octokit } from "octokit";




function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [item, setitem] = useState([])
  useEffect(() => {
    
    searchGitHubUsers()
  }, [searchTerm])
  


  const handleInputChange = (event) => {
    
    setSearchTerm(event.target.value);
    
  };
  
  const searchGitHubUsers=async()=> {
    try {
      const octokit = new Octokit({ 
<<<<<<< HEAD
        auth: process.env.GITHUB_ACCESS_TOKEN
=======
        auth: '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'
>>>>>>> origin/main
      });
     const usersResponse= await octokit.request(`GET /search/users`, {
        q:searchTerm
      })
      
      setitem(usersResponse.data.items)
       console.log(usersResponse.data.items)
     
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
    <div className="container mt-4">
      <h2 className="mb-4">GitHub User Search</h2>

      <div className="mb-3">
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Search GitHub users..."
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody id="userTableBody">
          {item.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.login}</td>
              <td>
                <a href={ele.url} className="App-link">
                  {ele.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default App;
