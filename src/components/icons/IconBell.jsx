import React from 'react'

// Parte del código tomado de Figma / sds (Simple Design System)
// Repositorio original: https://github.com/figma/sds
// Licencia: MIT

export const IconBell = () => {
  return (
    <svg
      width='32'
      height='40'
      viewBox='0 0 53 57'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_106_1849)'>
        <path
          d='M30.6425 44.75C30.2469 45.4319 29.6791 45.998 28.996 46.3914C28.3129 46.7849 27.5384 46.992 26.75 46.992C25.9616 46.992 25.1871 46.7849 24.504 46.3914C23.8209 45.998 23.2531 45.4319 22.8575 44.75M40.25 15.5C40.25 11.9196 38.8277 8.4858 36.2959 5.95406C33.7642 3.42232 30.3304 2 26.75 2C23.1696 2 19.7358 3.42232 17.2041 5.95406C14.6723 8.4858 13.25 11.9196 13.25 15.5C13.25 31.25 6.5 35.75 6.5 35.75H47C47 35.75 40.25 31.25 40.25 15.5Z'
          stroke='#F3F3F3'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_106_1849'
          x='0.499756'
          y='0'
          width='52.5005'
          height='56.992'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_106_1849'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_106_1849'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
