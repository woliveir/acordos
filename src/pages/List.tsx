import { DefaultLayout } from '../layouts';
import { useParams, Link } from  'react-router-dom';

interface IProps {
    children: React.ReactNode
}

export const List: React.FC<IProps> = ( {children} ) => {

    const { tipo  } = useParams();
    return (
      <DefaultLayout widthContent='95%'>
          {children}
          <b>
            Sou a página List 
          </b>
          <hr />
          <b>eu sou o parametro: {tipo}</b>
          <hr />
          <Link to='/'>Voltar para Home</Link>
      </DefaultLayout>
    );

}