import React, { useState } from "react";

const SellerDashboard = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null, // Store the uploaded image file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file, // Store the file object in state
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    const newItem = {
      ...formData,
      image: URL.createObjectURL(formData.image), // Generate a temporary URL for the image
    };

    onAddItem(newItem); // Pass the new item to the parent
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "",
      image: null,
    }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      {formData.image && (
        <div>
          <p>Preview:</p>
          <img
            src={URL.createObjectURL(formData.image)}
            alt="Preview"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        </div>
      )}
      <button type="submit">Upload Item</button>
    </form>
  );
};

export default SellerDashboard;
