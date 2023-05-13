import { Canvas } from '@react-three/fiber'
import { SceneStateManager } from 'agape-sdk'
import { Loader } from '../Loader/Loader'
import { Background } from 'agape-sdk'
import { GameModeAdapter } from './GameModeAdapter'
import { SceneKit } from './SceneKit'
import { PPSwitch } from 'agape-sdk'
import { Joystick } from 'agape-sdk'

export function Runner() {
  return (
    <div className='h-full w-full'>
      <SceneStateManager
        ReadyCompos={function Compos({ useStore }) {
          let ready = useStore((r) => r.ready)

          return (
            <>
              {/*  */}
              {/*  */}
              {/*  */}
              <Loader useStore={useStore}></Loader>

              <Canvas>
                {ready && (
                  <>
                    <SceneKit useStore={useStore}></SceneKit>
                    <GameModeAdapter useStore={useStore}></GameModeAdapter>
                    <Background useStore={useStore}></Background>
                    <PPSwitch useStore={useStore}></PPSwitch>
                  </>
                )}
              </Canvas>

              <div id='guilayer'></div>
              <JoyStickHTML useStore={useStore}></JoyStickHTML>
              {/*  */}
            </>
          )
        }}
      ></SceneStateManager>
    </div>
  )
}

function JoyStickHTML({ useStore }) {
  let gameMode = useStore((r) => r.gameMode)
  return <>{gameMode === 'room' && <Joystick></Joystick>}</>
}
