
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import moon from './moon.png'
import land from './land.png'
function App() {

  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer 
          offset={0}
          speed={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
          factor={2}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
           />
      </Parallax>
    </div>
  )
}

export default App
