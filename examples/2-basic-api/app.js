const result = document.querySelector('.result')
const url = '/.netlify/functions'
const fetchData = async () => {
  try {
    // const {data} = await axios.get(`${url}/2-basic-api`)
    const { data } = await axios.get(`/api/2-basic-api`)
    const products = data
      .map((i) => {
        const {
          name,
          id,
          price,
          image: { url },
        } = i
        return `<article class="product">
     <img
       src=${url}
       alt=${name}
     />
     <div class="info">
       <h5>${name}</h5>
       <h5 class="price">$${price}</h5>
     </div>
   </article>`
      })
      .join(' ')

    result.innerHTML = products
  } catch (error) {
    result.innerHTML = `<h4>There was an error. Please try again later</h4>`
    console.log(error.response.data)
  }
}
fetchData()
