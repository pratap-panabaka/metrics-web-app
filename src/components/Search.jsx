import { debounce } from 'lodash';

function Search(props) {
    const obj = props;
    const { setSearch } = obj;

    const handleInputChange = debounce((e) => {
        setSearch(e.target.value);
    }, 1000);

    return (
        <div className='flex items-center justify-center w-full'>
            <input
                className='text-center w-full h-12'
                type='text'
                placeholder='search by name or scheme code'
                onChange={handleInputChange}
                required
                autoFocus
            />
        </div>
    )
}

export default Search