import './ProductControlsContainer.scss';
import { SortDirection } from '../../domain/enums/sortDirection';
import SortingControl from '../../components/SortingControl/SortingControl';
import FilteringControl from '../../components/FilteringControl/FilteringControl';
import SelectLimitControl from '../../components/SelectLimitControl/SelectLimitControl';

interface ProductControlsContainerProps {
  currentSortDirection: SortDirection
  sortElementsFn: (sortDirection: SortDirection) => void;
  filterElementsFn: (filterQuery: string) => void;
  availableLimits: number[];
  currentLimit: number;
  selectLimitFn: (limit: number) => void;
}

function ProductControlsContainer({
  currentSortDirection,
  sortElementsFn,
  filterElementsFn,
  availableLimits,
  currentLimit,
  selectLimitFn
}: ProductControlsContainerProps) {
  return (
    <div className='products-controls'>
      <div className='products-controls-item'>
        <FilteringControl filterElementsFn={filterElementsFn} />
      </div>
      <div className='products-controls-item'>
        <div className='margin'>
          <SortingControl currentSortDirection={currentSortDirection} sortElementsFn={sortElementsFn} />
        </div>
        <SelectLimitControl availableLimits={availableLimits} currentLimit={currentLimit} selectLimitFn={selectLimitFn} />
      </div>
    </div>
  );
}

export default ProductControlsContainer;
