import { useState, useEffect } from 'react';

import { filterDebounceTime } from '../../config/uiConfig';

interface FilteringControlProps {
  filterElementsFn: (filterQuery: string) => void;
}

function FilteringControl({filterElementsFn}: FilteringControlProps) {
  const [filterQuery, setFilterQuery] = useState<string>('');


  useEffect(() => {
    const debounceTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      filterElementsFn(filterQuery);
    }, filterDebounceTime)

    return () => clearTimeout(debounceTimer);
  }, [filterQuery, filterElementsFn])

    
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setFilterQuery(event?.target?.value);
  }

  return (
    <div className='filter-container'>
      <input type="search" value={filterQuery} onChange={handleChange} placeholder='Filtruj po tytule...'/>
    </div>
  );
}

export default FilteringControl;
