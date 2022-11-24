import Image from "next/image";
import React from "react";
import Modal from "react-modal";

const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");
const MySocials = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='pb-12'>
      <h1 className='font-medium text-3xl'>
        Complete your profile so you are eligible for paid Kollaborations
      </h1>
      <h1 className='mt-12 font-medium text-xl'>Add your Socials</h1>
      <div className='mt-4 rounded-2xl grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-3 xl:gap-x-8'>
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <div
            key={product}
            className='group relative bg-gray-200 p-2 cursor-pointer'
          >
            <div className='relative min-h-20 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-20'>
              <Image
                src='https://source.unsplash.com/4u7VzDgNgLI'
                alt='Social'
                // Disabled on onDragStart={(event)=> event.preventDefault() to prevent dragging of images
                onDragStart={(event) => event.preventDefault()}
                layout='fill'
              />
            </div>
          </div>
        ))}
      </div>

      <h1 className='mt-12 font-medium text-xl'>Add Payment Information</h1>
      <div className='mt-2 border-t border-gray-200 pt-4'>
        <fieldset className='my-4'>
          <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
            {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
              <div key={paymentMethod.id} className='flex items-center'>
                {paymentMethodIdx === 0 ? (
                  <input
                    id={paymentMethod.id}
                    name='payment-type'
                    type='radio'
                    defaultChecked
                    className='focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300'
                  />
                ) : (
                  <input
                    id={paymentMethod.id}
                    name='payment-type'
                    type='radio'
                    className='focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300'
                  />
                )}

                <label
                  htmlFor={paymentMethod.id}
                  className='ml-3 block text-sm font-medium text-gray-700'
                >
                  {paymentMethod.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className='mt-6 grid grid-cols-8 gap-y-6 gap-x-4'>
          <div className='col-span-4'>
            <label
              htmlFor='card-number'
              className='block text-sm font-medium text-gray-700'
            >
              Card number
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='card-number'
                name='card-number'
                autoComplete='cc-number'
                className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='col-span-4'>
            <label
              htmlFor='name-on-card'
              className='block text-sm font-medium text-gray-700'
            >
              Name on card
            </label>
            <div className='mt-1'>
              <input
                type='text'
                id='name-on-card'
                name='name-on-card'
                autoComplete='cc-name'
                className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='col-span-3'>
            <label
              htmlFor='expiration-date'
              className='block text-sm font-medium text-gray-700'
            >
              Expiration date (MM/YY)
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='expiration-date'
                id='expiration-date'
                autoComplete='cc-exp'
                className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='cvc'
              className='block text-sm font-medium text-gray-700'
            >
              CVC
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='cvc'
                id='cvc'
                autoComplete='csc'
                className='mt-2 p-3 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      ></Modal>
    </div>
  );
};

export default MySocials;
