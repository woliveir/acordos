import { Link, useNavigate } from 'react-router-dom';
import { DefaultLayout } from '../layouts';
interface IProps {
    children: React.ReactNode
}

export const About: React.FC<IProps> = ( {children} ) => {

    const navigate = useNavigate();
    const onClick = () => {
      return navigate('/');
    }

    return (
      <DefaultLayout widthContent='95%'>
          {children}
          <b>
            Sou a página About 
          </b>
          <hr />
          <Link to='/'>Voltar para Home</Link>
          <hr />
          <button onClick={onClick}>
            Voltar para Home
          </button>
          
      </DefaultLayout>
    );

}