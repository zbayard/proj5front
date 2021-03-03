import {Input, Select} from 'semantic-ui-react'

function SearchFilter({search, setSearch, setFilterBy}) {

  const artistTypeOptions = [
    {key: 'all', value: 'all', text: 'all'},
    {key: 'solo artist', value: 'solo artist', text: 'solo artist'},
    {key: 'band/duo', value: 'band/duo', text: 'band/duo'},
    {key: 'dj', value: 'dj', text: 'dj'}
  ]

  function handleFilterChange(e){
    setFilterBy(e.target.innerText)
  }

  
    return (
      <div className="SearchFilter">
        <Input value={search} placeholder='search by artist' onChange={e => setSearch(e.target.value)}/>
        <Select onChange={handleFilterChange} placeholder="select by artist type" options={artistTypeOptions} />
      </div>
    );
  }
  
  export default SearchFilter;