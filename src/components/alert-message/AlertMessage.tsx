import React, {useState, useEffect } from 'react';
import { Alert, AlertProps } from '@mui/material'

interface IAlertMessage {
  show: boolean;
  severity: AlertProps['severity']
  message?: string;
  children?: React.ReactNode; 
  props?: AlertProps;
};

export const AlertMessage = ( { show = false, message, children, ...props }: IAlertMessage ) => {
  
  const [open, setOpen] = useState(show)
  const handleClose = () => {
    setOpen(false)
  }

  useEffect( () => {
    if (open){
      setTimeout(() => setOpen(false), 6000) // 6 segundos
    }
  }, [open])

  return (
    <>
      {open &&  
        <Alert variant='filled' onClose={handleClose} {...props}>
          {message || children}
        </Alert>

      }
    </>
  )
}