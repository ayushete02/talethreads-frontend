export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Auth Form */}
      <div className="flex-1 bg-white relative overflow-hidden">
        {/* Background pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5 bg-[#F8F0E5]"
          style={{
            backgroundImage: `url('/assets/loginBG.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 flex h-full justify-center min-h-screen px-6 py-8">
          <div className="w-full max-w-[280px] h-full sm:max-w-[320px]">
            {children}
          </div>
        </div>
      </div>
      
      <div className="flex-1 bg-[#FFAB36] relative overflow-hidden flex items-center justify-center">
        {/* Chat bubbles mockup exactly like the design */}
        <div className="relative">
          {/* Main chat container */}
          <div className="bg-white rounded-3xl p-6 w-80 h-96 shadow-2xl relative">
            {/* Chat bubble 1 - top left */}
            <div className="absolute top-6 left-6 right-48">
              <div className="bg-gray-100 -ml-28 rounded-full px-4 py-3">
                <div className="text-sm text-gray-600">Lorem Ipsum</div>
              </div>
            </div>
            
            {/* Chat bubble 2 - middle left */}
            <div className="absolute top-52 left-6 right-56">
              <div className="bg-gray-100 rounded-full  -ml-16  px-4 py-3">
                <div className="text-sm text-gray-600">Lorem Ipsum</div>
              </div>
            </div>
            
            {/* Profile/Avatar placeholder - bottom right */}
            <div className="absolute top-20 -right-16 w-28 h-28 bg-gray-300 rounded-xl"></div>
            {/* Chat bubble 3 - middle right (user message) */}
            <div className="absolute top-68 right-56 left-6">
              <div className="bg-gray-300 rounded-full  -ml-28 px-4 py-3">
                <div className="text-sm text-gray-700">Lorem Ipsum</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
