```javascript
// pages/index.js
export default function Home() {
  // Add state management here to re-fetch the data on route change
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    }
    fetchData()
  }, []);
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

//pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Fetched Data' })
} 
```