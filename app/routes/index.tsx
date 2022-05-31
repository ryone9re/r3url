import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'

import PageTemplate from '~/components/PageTemplate'

export default function Index() {
  return (
    <PageTemplate>
      <Body />
    </PageTemplate>
  )
}

const Body = () => {
  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Typography align='center' variant='h4' component='div'>
          以下のボックスに省略したいURLを入力してください
        </Typography>
        <FormControl fullWidth sx={{ mt: 1.5 }}>
          <InputLabel htmlFor='outlined-adornment-amount'>URL</InputLabel>
          <OutlinedInput
            id='outlined-adornment-amount'
            onChange={() => console.log('click')}
            label='Amount'
          />
        </FormControl>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button fullWidth variant='contained'>
          省略
        </Button>
      </CardActions>
    </Card>
  )
}
