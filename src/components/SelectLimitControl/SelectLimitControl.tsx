interface SelectLimitControlProps {
  availableLimits: number[];
  currentLimit: number;
  selectLimitFn: (limit: number) => void;
}

function SelectLimitControl({availableLimits, currentLimit, selectLimitFn}: SelectLimitControlProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    if (!event?.target) {
      return;
    }

    event.preventDefault();
    selectLimitFn(parseInt(event.target.value));
  }

  return (
    <div className='select-container'>
      <select id='limit' onChange={handleChange} value={currentLimit}>
        { availableLimits?.map((value: number, index: number) => <option key={index} value={value}>{ value }</option>) }
      </select>
    </div>
  );
}

export default SelectLimitControl;
