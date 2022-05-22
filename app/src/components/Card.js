import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions/fetchProducts";
import { IoIosMore } from "react-icons/io";

const Card = () => {
  const dispatch = useDispatch();
  const { products, page } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [dispatch, page]);

  return (
    <>
      {products === null && <div>Loading...</div>}
      {products && (
        <>
          <div className="md:grid grid-cols-4 2xl:gap-8 xl:gap-2 mb-8">
            {products.map((product, index) => {
              return (
                <>
                  <div className="md:hidden shadow-lg rounded-2xl items-center p-4 bg-white mx-auto mb-5 key={index}">
                    <div className="flex justify-between mb-3">
                      <div className="flex">
                        <div>Personnel ID:</div>
                        <div className="ml-1 text-teal-500 font-medium">12345</div>
                      </div>
                      <IoIosMore size="25" />
                    </div>
                    <div className="border-solid border-[1px] mb-5"></div>
                    <div className=" flex">
                      <div>
                        <img alt="profil" src={product.picture.large} className="mx-auto object-cover rounded-full h-28 w-28 " />
                      </div>
                      <div className="ml-5">
                        <div className="font-bold text-sm">Name</div>
                        <div className="font-normal mb-2">
                          {product.name.first} {product.name.last}
                        </div>
                        <div className="font-bold text-sm">Telephone</div>
                        <div className="font-normal mb-2">{product.phone}</div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block shadow-lg rounded-2xl 2xl:w-64 xl:w-60 p-4 bg-white mx-auto mb-5 md:mb-0" key={index}>
                  <div className="flex justify-between mb-3">
                      <div className="flex">
                        <div>Personnel ID:</div>
                        <div className="ml-1 text-teal-500 font-medium">12345</div>
                      </div>
                      <IoIosMore size="25" />
                    </div>
                    <div className="border-solid border-[1px] mb-5"></div>
                    <img alt="profil" src={product.picture.large} className="mx-auto mb-5 object-cover rounded-full 2xl:h-48 2xl:w-48 xl:h-36 xl:w-36 " />
                    <div className="font-bold text-sm">Name</div>
                    <div className="font-normal mb-2">
                      {product.name.first} {product.name.last}
                    </div>
                    <div className="font-bold text-sm">Telephone</div>
                    <div className="font-normal mb-2">{product.phone}</div>
                    <div className="font-bold text-sm">Birthday</div>
                    <div className="font-normal mb-2">{product.dob.date.split("T", 1)}</div>
                    <div className="font-bold text-sm">Email</div>

                    <div className="font-normal">
                      {product.email.split(".")[1]}.{product.email.split(".")[2]}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Card;
