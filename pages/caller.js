import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import React, { useState, useEffect } from 'react';
import { addEntry } from './api/firebase.functions.js';

export default function CallerPage() {
  const [summary, setSummary] = useState('');
  const [remedies, setRemedies] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const prompt = e.target.parentElement.children[0].value;

    const response = await fetch('/api/summarize', {
                                        mode: 'cors',
                                        headers: {
                                          'Accept': 'application/json',
                                          'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({prompt: prompt}),
                                        method: 'POST'
                                      });
    const json = await response.json();
    let oneline = json.body.generations[0].text;
    oneline = oneline.substring(0, oneline.length - 2); 
    // store the summary in database with randomly generated index 
    setSummary(oneline);

    const remediesResponse = await fetch('/api/remedy', {
                                            mode: 'cors',
                                            headers: {
                                              'Accept': 'application/json',
                                              'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({prompt: oneline}),
                                            method: 'POST'
                                          });
    const remediesjson = await remediesResponse.json();
    console.log(remediesjson);
    let remediesResults = remediesjson.body.generations[0].text;
    if (remediesResults[remediesResults.length - 2] === "-" && remediesResults[remediesResults.length - 1] === "-") {
      remediesResults = remediesResults.substring(0, remediesResults.length - 2);
    }
    // would need to store this in database
    console.log(remediesResults);
    setRemedies(remediesResults);

    await addEntry(oneline, remediesResults);
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
      <div id='result' value={summary}>
        {summary}
      </div>
      <div id='remedies' value={remedies}>
        {remedies}
      </div>
    </Layout>
  );
}