import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [contactData, setContactData] = useState([]);
  const mockApi = "https://65ed97e008706c584d9a24e0.mockapi.io/contact-app";
  const post = async () => {
    await axios
      .post(mockApi, {
        name: name,
        phone: phone,
        gender: gender,
      })
      .then(async () => {
        await axios
          .get(mockApi)
          .then((res) => {
            setContactData(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
        setName("");
        setPhone("");
        setGender("");
      });
  };

  const handlePostData = () => {
    post();
  };
  return (
    <div>
      <div className=" bg-blue-600 p-5 mt-2 me-2 ms-2 shadow shadow-gray-500 text-white text-xl font-medium">
        Contact App
      </div>
      <div className="flex mt-20 justify-around w-11/12 me-auto ms-auto">
        <div className="w-9/12 me-20">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="Enter Your Phone..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <select
              name="gender"
              className="w-full border-2 border-gray-400 rounded  p-3 bg-slate-50"
              value={gender}
              onChange={(e) => setGender(e.target.value)}>
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
            <button
              className="bg-blue-600 pt-2 pb-2 pe-4 ps-4 text-center rounded text-white font-medium hover:bg-blue-800 shadow-gray-500 hover:shadow-lg"
              onClick={handlePostData}>
              ADD
            </button>
          </div>
        </div>
        <div className="rounded shadow shadow-gray-600 bg-slate-50 w-full p-5">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contactData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="bi bi-pencil-fill cursor-pointer fill-green-800"
                        viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="bi bi-trash3-fill cursor-pointer fill-red-600"
                        viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
