import React from "react";
import Image from "next/image";

const ShoppingCart: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:py-16 md:px-12 flex items-center justify-center">
      <div className="max-w-[1440px] w-full bg-white p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 mb-6">
          Your shopping cart
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm md:text-base text-gray-600 border-b">
              <th className="py-4">Product</th>
              <th className="py-4 text-center">Quantity</th>
              <th className="py-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-6 flex items-center">
                <Image
                  src="/the-silky-vase.png"
                  alt="The silky vase"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-sm md:text-base font-medium">
                    Graystone vase
                  </h3>
                  <p className="text-sm text-gray-500">
                    A timeless ceramic vase with a soft color grey glaze.
                  </p>
                  <p className="text-sm text-gray-700 mt-1">£85</p>
                </div>
              </td>
              <td className="py-6 text-center">1</td>
              <td className="py-6 text-right text-gray-800 font-medium">£85</td>
            </tr>
            <tr className="border-b">
              <td className="py-6 flex items-center">
                <Image
                  src="/rustic-vase-set.png"
                  alt="Basic white vase"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-sm md:text-base font-medium">
                    Basic white vase
                  </h3>
                  <p className="text-sm text-gray-500">
                    Beautiful and simple; this is one for the classics.
                  </p>
                  <p className="text-sm text-gray-700 mt-1">£125</p>
                </div>
              </td>
              <td className="py-6 text-center">1</td>
              <td className="py-6 text-right text-gray-800 font-medium">
                £125
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex flex-col md:flex-row items-end justify-between">
          <div className="text-sm text-gray-600">
            Taxes and shipping are calculated at checkout.
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-lg md:text-xl font-semibold text-gray-800">
              Subtotal: £210
            </p>
            <button className="bg-[rgb(42,37,75)] text-white py-3 px-6 rounded-md hover:bg-[rgb(102,88,192)] transition mt-4">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
