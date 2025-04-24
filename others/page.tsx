const Parent = () => {
  const [name, setName] = useState('frank')
  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    });
    return () =>{
      document.removeEventListener('touchmove', handleTouchMove);
    }
  }, [])

  const handleTouchMove = () => {}
  return (
    <Touchable
      name={name}
      onTouchMove={handleTouchMove}
    >
        hi
    </Touchable>
  )
}

// Type definition for deeply nested array structure
type NestedNumberArray = Array<number | NestedNumberArray>;
const arr: NestedNumberArray = [1,2,[3,4,5,[6,7,8],9],10,[11,12]];
function flattenArray(arr: NestedNumberArray): number[] {
  const flattened: number[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}