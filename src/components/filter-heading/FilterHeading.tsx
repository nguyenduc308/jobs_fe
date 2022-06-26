import classnames from 'classnames';
import { useState } from 'react';

const FilterHeading = () => {
  const [filterOptions, setFilterOptions] = useState([
    { name: 'Best Matches', active: true },
    { name: 'Featured', active: false },
    { name: 'Most recent', active: false },
  ]);

  const handleFilterItemClick = (index: number) => {
    setFilterOptions(
      filterOptions.map((item, idx) => ({
        ...item,
        active: idx === index,
      }))
    );
  };

  return (
    <div className='rounded-md bg-white'>
      <nav className='p-2'>
        <ul className='flex space-x-3'>
          {filterOptions.map((item, index) => {
            return (
              <li
                key={index}
                className={classnames(
                  'p-3',
                  'rounded-md',
                  'animated-item',
                  'cursor-pointer',
                  'select-none',
                  { 'bg-black': item.active, white: item.active }
                )}
                onClick={() => handleFilterItemClick(index)}
              >
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FilterHeading;
