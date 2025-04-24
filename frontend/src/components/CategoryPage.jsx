// import React, { useState } from 'react';
// import './CategoryPage.css'; 

// const CategoryPage = () => {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Healthcare", description: "Schemes related to healthcare" },
//     { id: 2, name: "Education", description: "Schemes related to education" },
//     { id: 3, name: "Housing", description: "Schemes related to housing" },
//     { id: 4, name: "Pension", description: "Schemes related to pension" }
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [schemes, setSchemes] = useState([]);

//   const fetchSchemes = (categoryName) => {
//     setSelectedCategory(categoryName);

//     setSchemes([
//       { id: 1, name: "Atal Pension Yojana", description: "Pension scheme for unorganized workers", link: "#" },
//       { id: 2, name: "Ayushman Bharat Yojana", description: "Health insurance for economically weak citizens", link: "#" }
//     ]);
//   };

//   return (
//     <div className="category-container">
//       <h2>Available Schemes by Category</h2>

//       <div className="category-grid">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className="category-card"
//             onClick={() => fetchSchemes(cat.name)}
//             style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '10px', textAlign: 'center' }}
//           >
//             <h3>{cat.name}</h3>
//             <p>{cat.description}</p>
//           </div>
//         ))}
//       </div>

//       {selectedCategory && (
//         <div className="schemes-section">
//           <h3>Schemes under "{selectedCategory}"</h3>
//           {schemes.length > 0 ? (
//             <div className="schemes-grid">
//               {schemes.map((scheme) => (
//                 <div key={scheme.id} className="scheme-card">
//                   <h4>{scheme.name}</h4>
//                   <p>{scheme.description}</p>
//                   <a href={scheme.link} target="_blank" rel="noopener noreferrer">
//                     Learn More
//                   </a>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No schemes found under this category.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Healthcare", description: "Schemes related to healthcare" },
    { id: 2, name: "Education", description: "Schemes related to education" },
    { id: 3, name: "Housing", description: "Schemes related to housing" },
    { id: 4, name: "Pension", description: "Schemes related to pension" },
    {id: 5, name:"Agriculture", description: "Schemes related to Agriculture"},
    {id: 6, name:"SkillDevelopement", description:"Schemes related to Skill Development"},
    {id:7,name:"Welfare", description:"Social Welfare Schemes"},
    {id:8, name:"Finance", description:"Schemes related Finance"},
    {id:9, name: "Enterprise",description:" Enterprises Schemes are Available"},
    {id:10, name:"DisasterManagement", description:"Disaster Manegement Schemes will be updated."},
    {id:11, name:"Social", description:"Social Archielogist Schemes"},
    {id:12, name:"Loan", description : "Financial Aided Schemes"},
    {id:13, name:"Property", description: "Property Schemes"},
    




  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/schemes/${categoryName}`);
  };

  return (
    <div className="category-container">
      <h2>Available Schemes by Category</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => handleCategoryClick(cat.name)}
            style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc', margin: '10px', textAlign: 'center' }}
          >
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

