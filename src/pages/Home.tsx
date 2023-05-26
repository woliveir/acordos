import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DefaultLayout } from '../layouts';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/pt-br';

import { useAxios } from '../hooks/useAxios';
import { AlertMessage } from '../components';
import { TextField, TextFieldProps } from '@mui/material';


interface IProps {
  children: React.ReactNode
}

export const Home: React.FC<IProps> = ( {children} ) => {

    const [ showAlert, setShowAlert ] = useState(false);
    const [ data, setData ] = useState(null);

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

  const convertDate = ( value: any ) => {
    
    try {
      return value.toISOString().substring(0,10);
    } catch (e) {
      console.log(e);
    }

    return value
    
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
          <br />
          <form>
            
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
              <DatePicker
              onError={(error) => console.log( 'error: ', error)}
              label='data pt-br'
              onChange={(value) => setData(value)}
              value={data}
              renderInput={ (props: TextFieldProps) => <TextField {...props} value={data} /> }
              />
            </LocalizationProvider>
          </form>

          {showAlert && (<AlertMessage severity={alertMessageGet.severityAlert} message={alertMessageGet.messageAlert} onClose={handleOnCloseAlert} />)}
          {JSON.stringify(dataGet)}
          {data && convertDate(data)?.toString()}
      </DefaultLayout>
    );

}
