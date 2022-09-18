import Link from 'next/link';

import { getEntries } from './api/firebase.functions.js';

export async function getStaticProps() {
  const entries = await getEntries();
  return {
    props: {
      entries
    },
  };
}

export default function AdminPage({ entries }) {
  return (
    <>
      <h1>Admin Page</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}