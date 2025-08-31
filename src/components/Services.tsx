export default function Services() {
    return (
      <div className="max-w-5xl mx-auto py-20 px-6 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Website Development</h3>
            <p className="text-gray-600">Build modern and responsive websites tailored to your business needs.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Create beautiful, user-friendly interfaces for better experiences.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">SEO Optimization</h3>
            <p className="text-gray-600">Make your website stand out on Google and reach more customers.</p>
          </div>
        </div>
      </div>
    );
  }
  