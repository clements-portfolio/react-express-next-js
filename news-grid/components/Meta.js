import Head from 'next/head';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/icons/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WebDev News',
  description: 'Web Development News from GitHub!',
  keywords: 'Web Development, Programming, Next JS, React JS'
}

export default Meta
