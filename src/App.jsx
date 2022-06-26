
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
          <ParallaxLayer
          offset={0.2}
          speed={0.5}
          >
            <h2>Welcome to my website</h2>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.2}
            speed={2}>
            <h2>Web Development is fun!</h2>
          </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
