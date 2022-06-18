import Head from 'next/head'
import CounterWidget from '../components/dashboard/counter-widget'

export default function Home() {

  const vm = {
    title: 'Counter',
    countValue: '24,600',
  };

 return (<>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="p-4 text-3xl font-bold underline">
        Hello world!
      </h1>
       <dl class="px-2 mt-5 grid grid-cols-2 gap-5 sm:grid-cols-6">
        <CounterWidget vm={vm} />
       </dl>
      
    </>
  )
}
