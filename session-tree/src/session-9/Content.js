import { useContext } from 'react';
import DataContext from './DataContext';

const Content = () =>
{

    const dataCtx = useContext(DataContext);

    /*const handleOnChange = (event) => {
        dataCtx.setUsename(event.target.value);
    }*/

    const handleOnClick = (e) =>{
        dataCtx.setUsename(e.target.value);
    }

    return <div>
        <div>Đăng nhập</div>
        <div>
            <input placeholder="Usename" value={dataCtx.usename}/>
            <button style={{display: dataCtx.usename == undefined ? 'block': null}} onClick={handleOnClick}>Đăng nhập</button>
            <p>Welcome {dataCtx.usename}</p>
        </div>
    </div>
}
export default Content;