import { Grid } from '@mui/material'

import Header from './Header'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const PageTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs='auto'>
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default PageTemplate
