import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRoutes } from './routes/transaction'

const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Server listening at http://0.0.0.0:3333`)
})
