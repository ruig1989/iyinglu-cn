const insights = [
  { title: '2026留学趋势展望', desc: '美英澳加最新政策与申请策略分析', date: '2025.11.20' },
  { title: '中国企业出海跨文化挑战', desc: '从人才视角破解海外管理难题', date: '2025.11.15' },
  { title: '济南国际化人才战略思考', desc: '区域发展与全球引智的双向奔赴', date: '2025.11.10' },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-16 md:py-20 bg-gray-light">
      <div className="container-custom">
        <h2 className="section-title">嬴麓洞察 · 前沿观点</h2>
        <p className="section-sub">分享海外留学、人才战略与企业出海的政策与思考</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 shadow-sm border border-gray-border card-hover">
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
              <span className="text-secondary text-xs font-medium">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}