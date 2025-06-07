 import { Timer } from 'lucide-react'
import { Container } from './components/Container'
 import { Heading } from './components/Heading'
import './styles/global.css'
 import './styles/theme.css'

 
 export function App() {
    return ( 
    <>
        <Container>
            <Heading>
                <Timer>timer</Timer>
            </Heading>
        </Container>

        <Container>
            <Heading>Chronos</Heading>
        </Container>
    </> )
}
