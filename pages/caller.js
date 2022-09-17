import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import React, { useState, useEffect } from 'react';

export default function CallerPage() {
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const prompt = e.target.parentElement.children[0].value;
    setContent(prompt);

    const response = await fetch('/api/summarize');
    const json = await response.json();
    console.log(json);
    setSummary('');
  }

  useEffect(() => {
    const resultElm = document.getElementById('result');
    resultElm.innerHTML = summary; 
  }, [summary]);

  return (
    <Layout>
      <Head>
          <title>Caller</title>
      </Head>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <form>
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter your text!' value={content} onChange={handleChange}></textarea>
        <button type='submit' onClick={handleClick}>Submit</button>
      </form>
      <div id='result'>
        {summary}
      </div>
    </Layout>
  );
}