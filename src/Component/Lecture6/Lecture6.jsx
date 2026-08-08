import React, { useMemo, useState } from 'react'

const product=[
  {id:1, name:'abc'},
  {id:2, name:'xyz'},
  {id:3, name:'pqr'}
]
const Lecture6 = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filterProduct = useMemo(() => {
  return product.filter((item) => {
    console.log("Filtering product");
    return item.name === search;
  });
}, [search]);

  console.log('filterProduct', filterProduct);
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <>
    <h2>Lecture 6: UseMemo</h2>
    <input type="text" placeholder="Enter text..." onChange={handleSearch} />
    <button onClick={()=> setCount(count+1)}>Increment</button>
    {count}
    </>
  )
}

export default Lecture6;