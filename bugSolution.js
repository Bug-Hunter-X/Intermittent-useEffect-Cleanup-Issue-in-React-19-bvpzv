```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const cleanup = () => {
      console.log('Unmounted!');
      setIsMounted(false);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    //Conditional logic to only run if mounted
    if (isMounted) {
        console.log('Mounted!');
    }
  }, [isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```