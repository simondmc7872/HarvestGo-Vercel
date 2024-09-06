import { useState, useEffect } from "react"
import useFetch from "./useFetch"
import Loader from "./Loader"

export default function MeatSeafoodAvail() {
  const [meatSeafood, setMeatSeafood] = useState([])
  const [availabilityStatus, setAvailabilityStatus] = useState({})
  const { get, loading } = useFetch("https://harvest-go-vercel.vercel.app/app")

  useEffect(() => {
    get("/api/meatseafoodavail")
      .then((data) => {
        console.log("Received data:", data)
        setMeatSeafood(data)
        console.log(meatSeafood)
      })
      .catch((error) => console.log("Could not load data", error))
  }, [])

  function itemAvailability(item) {
    let availability
    switch (item.itemid) {
      case 1:
        if (item.mainquantity >= 600) {
          availability = "High"
        } else if (item.mainquantity >= 300 && item.mainquantity < 600) {
          availability = "Medium"
        } else if (item.mainquantity > 0 && item.mainquantity < 300) {
          availability = "Low"
        } else {
          availability = "Out of Stock"
        }
        break
      case 2:
        if (item.mainquantity >= 900) {
          availability = "High"
        } else if (item.mainquantity >= 400 && item.mainquantity < 900) {
          availability = "Medium"
        } else if (item.mainquantity > 0 && item.mainquantity < 400) {
          availability = "Low"
        } else {
          availability = "Out of Stock"
        }
        break
      case 3:
        if (item.mainquantity >= 8000) {
          availability = "High"
        } else if (item.mainquantity >= 5000 && item.mainquantity < 8000) {
          availability = "Medium"
        } else if (item.mainquantity > 0 && item.mainquantity < 5000) {
          availability = "Low"
        } else {
          availability = "Out of Stock"
        }
        break
      case 4:
        if (item.mainquantity >= 15000) {
          availability = "High"
        } else if (item.mainquantity >= 8000 && item.mainquantity < 15000) {
          availability = "Medium"
        } else if (item.mainquantity > 0 && item.mainquantity < 8000) {
          availability = "Low"
        } else {
          availability = "Out of Stock"
        }
        break
      case 5:
        if (item.mainquantity >= 2500) {
          availability = "High"
        } else if (item.mainquantity >= 1250 && item.mainquantity < 2500) {
          availability = "Medium"
        } else if (item.mainquantity > 0 && item.mainquantity < 1250) {
          availability = "Low"
        } else {
          availability = "Out of Stock"
        }
        break
      case 6:
        if (item.mainquantity >= 4000) {
          availability = "High"
        } else if (item.mainquantity >= 2000 && item.mainquantity < 4000) {
          availability = "Medium"
        } else if (item.mainquantity > 0 && item.mainquantity < 2000) {
          availability = "Low"
        } else {
          availability = "Out of Stock"
        }
        break
      default:
        availability = "Unknown"
    }
    return availability
  }

  function handleCheckAvailability(item) {
    const status = itemAvailability(item)

    setAvailabilityStatus({ [item.itemid]: status })
  }

  return (
    <div className="meatseafood-layout">
      <div>
        <h1>Meat & Seafood Availability</h1>
        <p>
          We stock fresh and frozen seafood and meats at our physical locations
          at a competitive price.
          <br />
          Our suppliers are from sustainable sources and FDA certified. <br />
          <em>Check Availability Below!</em>
        </p>
      </div>

      <div className=".products-grid">
        {loading && <Loader />}
        {!loading && meatSeafood.length > 0 && (
          <table className="meatseafood-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Origin</th>
                <th>Supplier</th>
                <th>Availability</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {meatSeafood.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image_url} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.origin}</td>
                  <td>{item.supname}</td>
                  <td
                    className={`meatseafood-availability ${
                      availabilityStatus[item.itemid]
                    }`}
                  >
                    {availabilityStatus[item.itemid]}
                  </td>

                  <td>
                    <button
                      className="meatseafood-button"
                      onClick={() => handleCheckAvailability(item)}
                    >
                      Check Availability
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
