import { SortDirection } from '../../domain/enums/sortDirection';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

interface SortingControlProps {
  currentSortDirection: SortDirection
  sortElementsFn: (sortDirection: SortDirection) => void;
}

function SortingControl({currentSortDirection, sortElementsFn}: SortingControlProps) {
  function changeSorting(event: React.MouseEvent<SVGElement>, newSortDirection: SortDirection): void {
    event.preventDefault();
    sortElementsFn(newSortDirection);
  }

  return (
    <div className='sort-container'>
      { currentSortDirection === SortDirection.ASCENDING &&
        <AiOutlineArrowDown onClick={event => changeSorting(event, SortDirection.DESCENDING)} />
      }
      { currentSortDirection === SortDirection.DESCENDING &&
        <AiOutlineArrowUp onClick={event => changeSorting(event, SortDirection.ASCENDING)} />
      }
    </div>
  );
}

export default SortingControl;
