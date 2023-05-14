import React, { useState, useCallback, useRef, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { AlertProps } from '@mui/material';

interface IAxios {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  body?: Object[] | null;
}

interface IError {
  isError: boolean;
  messageError: string;
}

interface IAlert {
  showAlert: boolean;
  severityAlert: AlertProps['severity']; 
  messageAlert: string;
}
const headerAxios = {
  headers: {
    Accept: 'application/json',
  },
};

export const useAxios = () => {
  
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ data, setData ] = useState<Object[] | null>();
  const [ error, setError ] = useState<IError>({isError: false, messageError: ''});
  const [ alertMessage, setAlertMessage ] = useState<IAlert>({showAlert: false, messageAlert: '', severityAlert: 'info'}) 

  // sinal que indica cancelamento do requisicao pelo usuario
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  // multiplos metodos (verbos http)
  const fetchAxios = useCallback( 
    async ( {url, method, body}: IAxios) => {
      try {

        const response = await axios.request({
          data: body,
          signal: controllerRef.current.signal,
          method: method,
          url: url,
        });
        setData(response.data);

      } catch ( exception ) {
          const errorAxios = exception as AxiosError;
          const { message } = errorAxios;
          const { detail } = Object(errorAxios.response?.data)
          setError({isError: true, messageError: `${message} -- ${detail}`});
          setAlertMessage({showAlert: true, messageAlert: `${message} -- ${detail}`, severityAlert: 'error'})
      
        } finally {
      
          setIsLoading(false)
        if (!error.isError && method === 'get') {
          setAlertMessage({showAlert: true, messageAlert: 'Registro obtido com sucesso!', severityAlert: 'success'});
        }
      
      }
    } // async
  , []) // useCallback

  console.log('error: ', error);
  console.log('alertMessage:', alertMessage);
  return { cancel, isLoading, error, alertMessage, data, fetchAxios }
}