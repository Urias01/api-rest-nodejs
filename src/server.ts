import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transaction'

const app = fastify()

app.register(transactionsRoutes)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log(`Server listening at http://0.0.0.0:3333`)
})
