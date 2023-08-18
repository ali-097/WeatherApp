import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Weather from './components/Weather'

const queryClient = new QueryClient()

const App = () => {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Weather />
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
    </>
  )
}

export default App