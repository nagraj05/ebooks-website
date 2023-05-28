import Navigation from '../../Components/Navigation'
import { useParams } from 'react-router-dom';
import authorsData from '../AuthorsData';

export default function AgathaChristie(){

    const { id } = useParams();
    const author = authorsData.find((author) => author.id === parseInt(id));
  
    if (!author) {
      return <div>Author not found</div>;
    }

    return(
        <>
        <Navigation />
        </>

    )
}