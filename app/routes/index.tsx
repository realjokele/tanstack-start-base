import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

export const Route = createFileRoute('/')({
  component: Login,
})

const login = createServerFn({ method: 'POST' })
  .validator((user: unknown) => user as string)
  .handler(async ({ data: user }) => {
    console.log('login is called')
    return `Hello, ${user}! `
  })

function Login() {
  return (
    <div>
      <div>Route "/"</div>
      <form
        method="POST"
        onSubmit={async (event) => {
          console.log('submit')
          event.preventDefault()
          // When I don't use response, login() is not called
          const response = await login({ data: 'blubb' })
          // When I use response with console.log, login() is called
          console.log(response)
        }}
      >
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
