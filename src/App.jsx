import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [contactData, setContactData] = useState([]);
  const [newContactData, setNewContactData] = useState({
    name: "",
    phone: "",
    gender: "",
  });
  const [updateContacts, setUpdateContact] = useState({
    name: "",
    phone: "",
    gender: "",
  });

  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://65ed97e008706c584d9a24e0.mockapi.io/contact-app"
      );
      setContactData(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handlePhoneChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value == "" || re.test(e.target.value)) {
      setNewContactData({ ...newContactData, phone: e.target.value });
    }
  };

  const handlePostData = async () => {
    if (newContactData.gender) {
      try {
        const response = await axios.post(
          "https://65ed97e008706c584d9a24e0.mockapi.io/contact-app",
          newContactData
        );
        setContactData([...contactData, response.data]);
        setNewContactData({ name: "", phone: "", gender: "" });
        getData();
        toast.success("Contact Successfully added");
      } catch (error) {
        console.error("Error adding contact:", error);
      }
    } else {
      toast.error("all field are required");
    }
  };

  const handleDeleteContact = async (contact) => {
    try {
      await axios.delete(
        `https://65ed97e008706c584d9a24e0.mockapi.io/contact-app/${contact.id}`
      );
      setContactData(
        contactData.filter((contact) => contact.id !== contact.id)
      );
      getData();
      toast.success(`Contact ${contact.name} Successfully Deleted!`);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  const handleEditContact = (item) => {
    setSelectedContact(item);
    setUpdateContact({
      name: item.name,
      phone: item.phone,
      gender: item.gender,
    });
  };
  const updateContact = async () => {
    try {
      const response = await axios.put(
        `https://65ed97e008706c584d9a24e0.mockapi.io/contact-app/${selectedContact.id}`,
        updateContacts
      );

      const updatedContacts = contactData.map((contact) =>
        contact.id === selectedContact.id ? response.data : contact
      );

      setContactData(updatedContacts);
      setUpdateContact({ name: "", phone: "", gender: "" });
      setSelectedContact(null);
      getData();
      toast.success("Contact updated successfully!");
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Error updating contact");
    }
  };
  const handleBackBtn = () => {
    setSelectedContact(null);
  };

  return (
    <div className={`min-h-screen pt-2 bg-[#fbe3e6]`}>
      <div>
        <Toaster />
      </div>
      <div className=" bg-[#e03546] p-5  me-2 ms-2 shadow shadow-gray-500 text-white text-xl font-medium">
        Contact App
      </div>
      <div className="container mx-auto flex flex-wrap">
        <div className=" w-full md:w-1/2 px-3">
          <div className=" text-4xl text-[#e03546] font-semibold mb-5 mt-10 ">
            New Contact
          </div>
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
                className="block w-full rounded-md outline-none py-5 pl-10 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-slate-50"
                placeholder="Enter Your Name..."
                value={newContactData.name}
                onChange={(e) =>
                  setNewContactData({ ...newContactData, name: e.target.value })
                }
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
                type="tel"
                name="price"
                id="price"
                className="block w-full rounded-md outline-none py-5 pl-10 pr-20 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-slate-50"
                placeholder="Enter Your Phone..."
                value={newContactData.phone}
                maxLength={10}
                onChange={handlePhoneChange}
              />
            </div>
          </div>
          <div className="mt-5">
            <select
              name="gender"
              className="w-full outline-none rounded p-5  bg-slate-50"
              value={newContactData.gender}
              onChange={(e) =>
                setNewContactData({
                  ...newContactData,
                  gender: e.target.value,
                })
              }>
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
            {selectedContact ? (
              <div className="fixed inset-0  flex items-center justify-center ">
                <div className="bg-white p-8 rounded shadow-lg w-96">
                  <h2 className="text-2xl font-bold mb-4">
                    Update Contact Details
                  </h2>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-600 mb-2">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border p-2"
                      value={updateContacts.name}
                      onChange={(e) =>
                        setUpdateContact({
                          ...updateContacts,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm text-gray-600 mb-2">
                      Phone:
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full border p-2"
                      value={updateContacts.phone}
                      onChange={(e) =>
                        setUpdateContact({
                          ...updateContacts,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="gender"
                      className="block text-sm text-gray-600 mb-2">
                      Gender:
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full border p-2"
                      value={updateContacts.gender}
                      onChange={(e) =>
                        setUpdateContact({
                          ...updateContacts,
                          gender: e.target.value,
                        })
                      }>
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded me-5"
                      onClick={updateContact}>
                      Update
                    </button>
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={handleBackBtn}>
                      Back
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="bg-[#e03546] text-base flex items-center justify-center w-full pt-2 pb-2 pe-4 ps-4 text-center rounded text-white font-bold hover:opacity-75 shadow-gray-500 hover:shadow-lg"
                onClick={handlePostData}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={20}
                  className="bi bi-plus-circle fill-white me-1 font-bold"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                Add Contact
              </button>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <div className="text-4xl text-[#e03546] font-semibold mb-5 mt-10">
            Contact List
          </div>
          <div className=" overflow-auto">
            <table className="w-full bg-slate-50 divide-y divide-gray-200">
              <thead className="bg-gray-50 ">
                <tr>
                  <th
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="p-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      <td className="pl-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="pr-6 py-4 whitespace-nowrap">
                        {item.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.gender}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="p-2 bg-gray-200 rounded"
                          onClick={() => handleEditContact(item)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="bi bi-pencil-fill cursor-pointer"
                            viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                          </svg>
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="p-2 rounded bg-[#fbe3e6]"
                          onClick={() => handleDeleteContact(item)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            className="bi bi-trash3-fill fill-[#e03546]  cursor-pointer"
                            viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
