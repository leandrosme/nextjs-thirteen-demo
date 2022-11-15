async function getData() {
    const res = await fetch('https://ghibliapi.herokuapp.com/films');
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData();

    return (
      <main>
        <h1>You are on page.js - loaded</h1>
        <div>
          <ul>
            {data.map(({ id, title }) => <li key={id}>{title}</li>)}
          </ul>
        </div>
      </main>
    )
  }