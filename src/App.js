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
        auth: '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'
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
      <div class="container mt-4">
  <h2>GitHub User Search</h2>


  <div class="mb-3">
    <input type="text" id="searchInput"   value={searchTerm}
        onChange={handleInputChange}
        class="form-control" placeholder="Search GitHub users..."/>
  </div>

  
  <table class="table">
    <thead>
      
    </thead>
    <tbody id="userTableBody">
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Profile</th>
      </tr>
     { 
     item.map((ele)=>{
      return <tr>
          <td>{ele.id}</td>
          <td>{ele.login}</td>
          <td> <a href={ele.url}>{ele.url}</a></td>
        </tr>
      
     })
     }
    </tbody>
  </table>
</div>
    </div>
  );
}

export default App;
