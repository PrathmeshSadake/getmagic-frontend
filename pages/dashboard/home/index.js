const products = [
  {
    id: 1,
    name: "Co-produce content with other Creators",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Co-produce content with other Creators",
  },
  {
    id: 2,
    name: "Brand Search",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Brand Search",
  },
  {
    id: 3,
    name: "Complete Virutal ",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Assistant Package",
  },
];

const Home = () => {
  return (
    <div className='mx-auto max-w-2xl py-6 px-4 lg:max-w-7xl'>
      <h2 className='text-2xl font-medium tracking-wide text-gray-900'>
        I want to
      </h2>

      <div className='mt-6 rounded-2xl grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {products.map((product) => (
          <div key={product.id} className='group relative bg-gray-200 p-3'>
            <div className='min-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-40'>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
            <h3 className='mt-2 text-lg font-medium text-gray-700 text-center'>
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
