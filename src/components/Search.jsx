import { debounce } from 'lodash';

function Search(props) {
    const obj = props;
    const { value } = obj;

    const handleInputChange = debounce((e) => {
        value(e.target.value);
    }, 1000);

    return (
        <div className='bg-lite min-h-24 p-5 items-center justify-center flex flex-col mx-auto max-w-4xl'>
            <form className='flex mx-auto items-center justify-center space-x-2'>
                <input
                    className='text-center border border-orange-500 text-orange-500 h-12 outline-none focus:border-2 font-custom placeholder:font-custom'
                    type='text'
                    placeholder='type city name'
                    onChange={handleInputChange}
                    required
                    autoFocus
                />
            </form>
        </div>
    )
}

export default Search