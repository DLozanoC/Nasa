
import { useState } from 'react';

import Head from "next/head";
import ImagePreview from '../components/ImagePreview';

export default function Home({ items }) {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);

  const handleClick = async () => {
    const results = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}`);
    const previews = await results.json();
    setPhotos(previews.collection.items)
  }

  const handleChange = (e) => setSearch(e.target.value)

  return (
    <div className="container">
      <Head>
        <title>Nasa Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">The Nasa Gallery</h1>

        <form>
          <input id="nasaSearch" onChange={handleChange}
          className="searchInput"
          type="text"
          placeholder="search for an image" />

          <button
            type="button"
            className="button"
            disabled={search == ""}
            onClick={handleClick}
          >
            Find
          </button>
        </form>

        <div className="fade">
          <div className="gridContainer">
            {photos.map((preview) => (
              <ImagePreview
              key={preview.data[0].nasa_id}
              thumbnailUrl={preview.links[0].href}
              nasaId={preview.data[0].nasa_id} 
              nasaTitle={preview.data[0].title}/>  
                      
            ))}
          </div>
        </div>
      </main>
    </div>
  );
  
}

export async function getStaticProps() {
  const results = await fetch(`https://images-api.nasa.gov/search?media_type=image`);
  const preview = await results.json();
  const items = preview.collection.items;

  return {
    props: { items },
  }
}