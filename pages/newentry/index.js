
import NewEntry from '@/components/entry_form/NewEntry';
import Head from 'next/head';

const newentry = () => {
  return (
    <>
     <Head>
      <title>Add Your Task</title>
      <meta name="description" content="Add new task here "/>
    </Head>
    <NewEntry/>
    </>
    
  )
}

export default newentry;