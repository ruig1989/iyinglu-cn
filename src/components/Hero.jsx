'use client';

export default function Hero() {
  const scrollToBusiness = () => {
    const el = document.getElementById('business');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[700px] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/55 z-0"></div>
      <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 z-10 text-right pointer-events-none">
        <div className="text-white/70 text-sm md:text-2xl font-extrabold tracking-wider">
          ROOTED IN LAIWU,
        </div>
        <div className="text-white/70 text-sm md:text-2xl font-extrabold tracking-wider">
          GOING PLACES
        </div>
      </div>
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 max-w-2xl shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-4">
            扎根嬴地<br />麓达天下
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            嬴麓国际 —— 您的全球人才战略合伙人。十八年积淀，从海外留学到产业赋能，构建人才全周期生态。
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">18年</div>
              <div className="text-xs text-gray-500">行业积淀</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">2007</div>
              <div className="text-xs text-gray-500">初心启航</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">2025</div>
              <div className="text-xs text-gray-500">正式成立</div>
            </div>
          </div>
          <button onClick={scrollToBusiness} className="btn-primary">
            探索我们的服务 <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}