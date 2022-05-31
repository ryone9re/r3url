import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography
} from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import type { SubmitHandler } from 'react-hook-form'

import PageTemplate from '~/components/PageTemplate'

export default function Index() {
  return (
    <PageTemplate>
      <Body />
    </PageTemplate>
  )
}

type FormInput = {
  url: string
}

const Body = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    resolver: yupResolver(
      yup.object({
        url: yup
          .string()
          .required('必須項目です')
          .matches(
            /https?:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+\.[a-zA-Z0-9]+/g,
            'URLの形式が不正です'
          )
      })
    )
  })
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let rand = Array.from(crypto.getRandomValues(new Uint32Array(6)))
      .map((v) => S[v % S.length])
      .join('')
    while (await R3URL_KV.get(rand)) {
      rand = Array.from(crypto.getRandomValues(new Uint32Array(6)))
        .map((v) => S[v % S.length])
        .join('')
    }
    await R3URL_KV.put(rand, data.url)
  }
  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <Typography align='center' variant='h4' component='div'>
          以下のボックスに省略したいURLを入力してください
        </Typography>
        <TextField
          fullWidth
          sx={{ mt: 1.5 }}
          required
          label='URL'
          type='url'
          {...register('url')}
          error={'url' in errors}
          helperText={errors.url?.message}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button fullWidth variant='contained' onClick={handleSubmit(onSubmit)}>
          省略
        </Button>
      </CardActions>
    </Card>
  )
}
