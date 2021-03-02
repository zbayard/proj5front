import {Input, Select} from 'semantic-ui-react'

function SearchFilter({search, setSearch}) {

  const artistTypeOptions = [
    {key: 'solo artist', value: 'solo artist', text: 'solo artist'},
    {key: 'duo/band', value: 'duo/band', text: 'duo/band'},
    {key: 'dj', value: 'dj', text: 'dj'}
  ]

  
    return (
      <div className="SearchFilter">
        <Input value={search} placeholder='search by artist' onChange={e => setSearch(e.target.value)}/>
        <Select placeholder="select by artist type" options={artistTypeOptions} />
      </div>
    );
  }
  
  export default SearchFilter;