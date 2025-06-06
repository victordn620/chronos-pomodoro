 import { TimerIcon } from 'lucide-react'
 import { Heading } from './components/Heading'
 
 import './styles/global.css'
 import './styles/theme.css'

 
 export function App() {

    return ( 
    <>
        <Heading>
            Olá mundo!
            <button>
                <TimerIcon />
            </button>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos consequuntur laudantium incidunt, nam laboriosam nisi. Labore repellat, ut iure, in dicta magnam deserunt natus qui molestiae culpa odit consectetur perspiciatis.</p>
    </> )
}
