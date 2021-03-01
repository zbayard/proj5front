import {Input} from 'semantic-ui-react'

function SearchFilter({search, setSearch}) {
    return (
      <div className="SearchFilter">
        <Input value={search} placeholder='search by artist' onChange={e => setSearch(e.target.value)}/>
      </div>
    );
  }
  
  export default SearchFilter;