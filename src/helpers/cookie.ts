import Cookies from 'universal-cookie';
/**
 * get cookieVipat
 */

export interface ICookie {
  matricula: string;
  nome: string;
  nomeGuerra: string;
  codigoComissao: string;
  nomeComissao: string;
  prefixo: string;
  prefixoUor: string;
  diretoria: string;
  super: string;
};


const cookies = new Cookies();
const txtCookieVipat = cookies.get('cookieVipat');
const txtCookieDefault = '{"matricula"="-1", "nome"="", "nomeGuerra"="", "codigoComissao"="-1", "nomeComissao"="", "prefixo"="-1", "prefixoUor"="-1", "diretoria"="-1", "super"="-1"}';
const objCookieDefault:ICookie = JSON.parse(txtCookieDefault.replace(/=/g, ':'));

const cookieParse = () => {
  try {
    const objCookie:ICookie = JSON.parse(txtCookieVipat.replace(/=/g, ':'));
    return objCookie;
  }catch(e){
    console.log('JSON falhou no parse: ', e);
    return objCookieDefault;
  }
};

export const cookie = cookieParse();
