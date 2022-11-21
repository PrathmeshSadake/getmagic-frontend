import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Co-produce content with other Creators",
    imageAlt: "Co-produce content with other Creators",
  },
  {
    id: 2,
    name: "Brand Search",
    imageAlt: "Brand Search",
  },
  {
    id: 3,
    name: "Complete Virutal ",
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
          <div
            key={product.id}
            className='group relative bg-gray-200 p-2 cursor-pointer'
          >
            <div className='relative min-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-40'>
              <Image
                src='https://source.unsplash.com/4u7VzDgNgLI'
                alt={product.imageAlt}
                onDragStart={(event)=> event.preventDefault()}/*Disabled on onDragStart={(event)=> event.preventDefault() to prevent dragging of images */
                layout='fill'
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
