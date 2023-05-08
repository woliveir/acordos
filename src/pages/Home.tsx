import { Link } from 'react-router-dom';
import { DefaultLayout } from '../layouts';
import { VerticalLinearStepper } from '../components';
interface IProps {
    children: React.ReactNode
}

export const Home: React.FC<IProps> = ( {children} ) => {

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
      </DefaultLayout>
    );

}
