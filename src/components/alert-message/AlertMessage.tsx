import React, {useState, useEffect, useCallback } from 'react';
import { Snackbar, Collapse, Alert, AlertProps, AlertTitle } from '@mui/material'
import { NestCamWiredStandTwoTone, SettingsPower } from '@mui/icons-material';

interface IAlertMessage {
  severity: AlertProps['severity']
  message?: string;
  onClose?: () => void;
  children?: React.ReactNode; 
  props?: AlertProps;
};

export const AlertMessage = ( {  message, children, ...props }: IAlertMessage ) => {

  const now =  new Date();
  const nowPtBr = Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'long', timeZone: 'America/Sao_Paulo' }).format(now);

  return (
      <Alert variant='filled' {...props}>
        <AlertTitle><code>{nowPtBr}</code></AlertTitle>
        <code>{message || children}</code>
      </Alert>
  )
}