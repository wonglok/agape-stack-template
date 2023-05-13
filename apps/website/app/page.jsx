'use client'

// import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
// import { Suspense } from 'react'

const Runner = dynamic(() => import('@/components/agape/Runner/Runner.jsx').then((mod) => mod.Runner), {
  ssr: false,
  loading: function Triangle() {
    return (
      <div
        className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-30 backdrop-blur-md'
        style={{ zIndex: '1000' }}
      >
        <div className='loader-triangle-7'>
          <style
            dangerouslySetInnerHTML={{
              __html: /* css */ `
.loader-triangle-7 #Artboard {
  stroke-dasharray: 0 226;
  animation: anm-tr7-dash 1s ease-in-out alternate infinite;
}

@keyframes anm-tr7-dash {
  from {
    stroke-dasharray: 0 226;
  }
  to {
    stroke-dasharray: 226 0;
  }
}

          `,
            }}
          ></style>
          <svg width='56px' height='50px' viewBox='0 0 226 200' version='1.1'>
            <g id='Page-1' stroke='none' strokeWidth='2' fill='none' fillRule='evenodd'>
              <g
                id='Artboard'
                fillRule='nonzero'
                stroke={'black'}
                // stroke='url(#linearGradient-1)'
                strokeWidth='10'
              >
                <g id='white-bg-logo'>
                  <path
                    d='M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z'
                    id='Triangle-3-Copy'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    )
  },
})

// const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
// const Duck = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Duck), { ssr: false })
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//   ssr: false,
//   loading: () => (
//     <div className='flex h-96 w-full flex-col items-center justify-center'>
//       <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//         <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//         <path
//           className='opacity-75'
//           fill='currentColor'
//           d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//         />
//       </svg>
//     </div>
//   ),
// })
// const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <Runner></Runner>
    </>
  )
}
