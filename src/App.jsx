import "./App.css";

function App() {
  return (
    <div>
      <div className=" bg-blue-600 p-5 mt-2 me-2 ms-2 shadow shadow-gray-500 text-white text-xl font-medium">
        Contact App
      </div>
      <div className="flex mt-20 justify-between w-3/4 me-auto ms-auto">
        <div className=" w-11/12 me-28">
          <div className=" text-4xl text-blue-600">New Contact</div>
          <div className="mt-5">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
                <span className="text-gray-500 sm:text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                name="name"
                className="block w-full rounded-md border-2 border-gray-400 py-5 pl-10 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-slate-50"
                placeholder="Enter Your Name..."
              />
            </div>
          </div>
          <div className="mt-5">
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-2 border-gray-400 py-5 pl-10 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-slate-50"
                placeholder="Enter Your Name..."
              />
            </div>
          </div>
          <div className="mt-5">
            <select
              name="gender"
              className="w-full border-2 border-gray-400 rounded  p-3 bg-slate-50">
              <option className="bg-white" value="">
                Gender
              </option>
              <option className="bg-white" value="male">
                Male
              </option>
              <option className="bg-white" value="female">
                Female
              </option>
              <option className="bg-white" value="other">
                Other
              </option>
            </select>
          </div>
          <div className="mt-5">
            <button className="bg-blue-600 pt-2 pb-2 pe-4 ps-4 text-center rounded text-white font-medium hover:bg-blue-800 shadow-gray-500 hover:shadow-lg">
              ADD
            </button>
          </div>
        </div>
        <div className="border-2 border-black bg-slate-50">
          <div className="flex px-4 py-5 border-gray-500">
            <div className="me-24">Name</div>
            <div className="me-24">Phone</div>
            <div className="me-24">Gender</div>
            <div className="me-24">Edit</div>
            <div>Delete</div>
          </div>
          <div className="flex border-t border-gray-500 py-5 px-4">
            <div className=" me-24">Name</div>
            <div className="me-24">Phone</div>
            <div className="me-24">Gender</div>
            <div className="me-24">Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
