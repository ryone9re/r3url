import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery
} from '@mui/material'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { createContext, useState, useMemo } from 'react'

import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function App() {
  const prefersColorScheme = useMediaQuery('(prefers-color-scheme: light)')
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersColorScheme ? 'light' : 'dark'
  )
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#455a64'
          },
          secondary: {
            main: '#536dfe'
          }
        }
      }),
    [mode]
  )
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <html lang='ja'>
            <head>
              <Meta />
              <Links />
              <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
              />
              <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/icon?family=Material+Icons'
              />
            </head>
            <body>
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </body>
          </html>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}
