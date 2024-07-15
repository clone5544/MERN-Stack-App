import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://imgs.search.brave.com/drMPoEiwuKDMXeA_jszTB9YbpxB-aHJrDHUGmrTmhrk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy12ZWdl/dGFibGUtcGF0ZS1y/b2xscy13aXRoLXRv/bWF0b2VzLWZyZW5j/aC1mcmllcy1pbnNp/ZGUtcGxhdGUtd2hp/dGUtc3VyZmFjZV8x/Nzk2NjYtMzU1OTEu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important Text.</p>
            <div className="contaier w-100"></div>
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
