import '@emotion/react'

type palette = 'primary' | 'black' | 'white' | 'gray' | 'semiGray'
type typography = 'title' | 'subTitle' | 'body' | 'caption'

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in palette]: string
    }
    typography: {
      [key in typography]: {
        fontSize: string
        lineHeight: string
      }
    }
  }
}
