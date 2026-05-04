const courses = [
  { title: "Edge Java (with AI)", duration: "5 Months" },
  { title: "AI Powered MERN Stack", duration: "5 Months" },
  { title: "Cyber Security", duration: "6 Months" },
  { title: "Data Science & Analytics", duration: "6 Months" },
];

const Categories = () => (
  <section className="py-16 bg-gray-50 px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Our Popular Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {courses.map((course, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:scale-105 transition-transform">
          <h3 className="font-bold text-xl mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
          <button className="text-blue-600 font-semibold">View Details →</button>
        </div>
      ))}
    </div>
  </section>
);
export default Categories;