import { debounce } from 'lodash';

function Search(props) {
    const obj = props;
    const { setSearch } = obj;

    const handleInputChange = debounce((e) => {
        setSearch(e.target.value);
    }, 1000);

    return (
        <div className='bg-dark w-full min-h-24 p-5 items-center justify-center flex flex-col'>
            <div className='flex items-center justify-center w-full'>
                <input
                    className='text-center w-full border border-toolite text-toodark h-12 outline-none focus:border-2 font-custom placeholder:font-custom'
                    type='text'
                    placeholder='search by name or scheme code'
                    onChange={handleInputChange}
                    required
                    autoFocus
                />
            </div>
        </div>
    )
}

export default Search