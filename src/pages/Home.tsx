import { useState } from 'react';
import { Link, useAsyncError } from 'react-router-dom';
import { DefaultLayout } from '../layouts';
import { VerticalLinearStepper, AlertMessage } from '../components';
import Message from '../components/alert-message/Message';
import { useAxios } from '../hooks/useAxios';
import { useTimeout } from '../hooks/useTimeout';
import { DarkMode, DarkModeSharp } from '@mui/icons-material';

interface IProps {
  children: React.ReactNode
}

export const Home: React.FC<IProps> = ( {children} ) => {

    const [ showAlert, setShowAlert ] = useState(false);

    interface IAxios {
      url: string;
      method: 'get' | 'post' | 'put' | 'delete';
      body?: Object[] | null;
    }
    const testeGet: IAxios = {url: 'https://jsonplaceholder.typicode.com/posts/1', 
                  method: 'get',
                  };
    const { cancel: cancelGet, isLoading: isLoadingGet, error: errorGet, alertMessage: alertMessageGet, data: dataGet, fetchAxios: fetchGet } = useAxios();  
    
    const handleClick = () => {
      fetchGet(testeGet);
        setShowAlert(true)
        const timeOut = setTimeout(()=>{
          setShowAlert(false)
          clearTimeout(timeOut) 
        }, 6000)
    }

    const handleOnCloseAlert  = () => {
      setShowAlert(false);
      console.log(showAlert)
    }

    return (
      <DefaultLayout widthContent='95%'>
          {children}
          <b>
            Eu sou a página Home
          </b>
          <br />
          <Link to='about'>Ir para About</Link>
          <br />
          <Link to='list'>Ir para List</Link>
          <br />
          <Link to='list/qualquer_coisa'>Ir para List/quaquer_coisa</Link>
          <br />
          <button onClick={handleClick}>obter</button>
          <hr />

          {showAlert && (<AlertMessage severity={alertMessageGet.severityAlert} message={alertMessageGet.messageAlert} onClose={handleOnCloseAlert} />)}
          {JSON.stringify(dataGet)}
      </DefaultLayout>
    );

}
