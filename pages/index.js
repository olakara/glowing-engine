import Head from 'next/head'
import CounterWidget from '../components/dashboard/counter-widget'

export default function Home() {

  const vm = {
    title: 'Counter',
    countValue: '24,600',
  };

 return (<>
      <Head> 
        <title >Home Page</title>
      </Head>
      <h1 data-testid="pageheader" className="p-4 text-3xl font-bold underline">
        Hello world!
      </h1>
       <dl className="px-2 mt-5 grid grid-cols-2 gap-5 sm:grid-cols-6">
        <CounterWidget vm={vm} color="red" />
        <CounterWidget vm={vm} color="orange" />
        <CounterWidget vm={vm} color="blue" />
       </dl>
    </>
  )
}
