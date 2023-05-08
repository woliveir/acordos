import { createContext } from 'react';
import { cookie } from '../helpers';

// o que pode vir do cookie
//{"matricula"="F9842231", "nome"="William ", "nomeGuerra"="WILLIAM ", "codigoComissao"="12381", "nomeComissao"="ASSESSOR II UE", "prefixo"="9262", "prefixoUor"="498849", "diretoria"="9262", "super"="0"}

// a partir do react 18
// https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
interface IProps {
    children: React.ReactNode;
}

export const CookieContext = createContext(cookie);

export const CookieProvider: React.FC<IProps> = ( { children } ) => {

  return (
    <CookieContext.Provider value={cookie} >
      {children}
    </CookieContext.Provider>
  );
};