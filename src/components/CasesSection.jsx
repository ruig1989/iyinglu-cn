const casesData = [
  { name: '伦敦大学学院', eng: 'University College London', degree: '硕士 · 建筑设计', highlight: '双非本科+职业导向选校', flag: 'gb', ranks: { USN: '7', THE: '22', QS: '9', ARWU: '14' } },
  { name: '宾夕法尼亚大学', eng: 'University of Pennsylvania', degree: '硕士 · 公共管理', highlight: '背景提升+精准文书', flag: 'us', ranks: { USN: '15', THE: '14', QS: '15', ARWU: '14' } },
  { name: '密歇根大学安娜堡分校', eng: 'University of Michigan, Ann Arbor', degree: '硕士 · 电气与计算机工程', highlight: '全程规划+半DIY', flag: 'us', ranks: { USN: '21', THE: '23', QS: '45', ARWU: '33' } },
  { name: '悉尼大学', eng: 'The University of Sydney', degree: '预科+本科 · 信息技术', highlight: '双非大一退学，升入澳洲名校', flag: 'au', ranks: { USN: '29', THE: '53', QS: '25', ARWU: '72' } },
  { name: '佛罗里达大学', eng: 'University of Florida', degree: '本科 · 体育管理', highlight: '民办国际学校毕业，升入美国名校', flag: 'us', ranks: { USN: '109', THE: '134', QS: '212', ARWU: '151-200' } },
  { name: '滑铁卢大学', eng: 'University of Waterloo', degree: '本科 · 数学', highlight: '公办普通高中毕业，升入加拿大名校', flag: 'ca', ranks: { USN: '197', THE: '162', QS: '119', ARWU: '151-200' } },
];

const flagBgMap = {
  gb: 'url(https://flagcdn.com/w320/gb.png)',
  us: 'url(https://flagcdn.com/w320/us.png)',
  au: 'url(https://flagcdn.com/w320/au.png)',
  ca: 'url(https://flagcdn.com/w320/ca.png)',
};

export default function CasesSection() {
  return (
    <section id="cases" className="py-16 md:py-20 bg-gray-light">
      <div className="container-custom">
        <h2 className="section-title">信任 · 源于专业</h2>
        <p className="section-sub">部分名校录取案例展示</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casesData.map((item, idx) => (
            <div key={idx} className="relative bg-white rounded-card p-5 pb-6 shadow-sm border border-gray-border card-hover overflow-hidden z-0"
                 style={{ backgroundImage: flagBgMap[item.flag], backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom -20px right -20px', backgroundSize: '160px', backgroundBlendMode: 'overlay' }}>
              <div className="absolute top-4 right-4 grid grid-cols-2 gap-x-3 gap-y-1 text-right z-10">
                <div><span className="font-bold text-secondary text-sm">{item.ranks.USN}</span><span className="text-[10px] text-secondary ml-0.5">USN</span></div>
                <div><span className="font-bold text-secondary text-sm">{item.ranks.THE}</span><span className="text-[10px] text-secondary ml-0.5">THE</span></div>
                <div><span className="font-bold text-secondary text-sm">{item.ranks.QS}</span><span className="text-[10px] text-secondary ml-0.5">QS</span></div>
                <div><span className="font-bold text-secondary text-sm">{item.ranks.ARWU}</span><span className="text-[10px] text-secondary ml-0.5">软科</span></div>
              </div>
              <h3 className="text-xl font-bold text-primary pr-24">{item.name}</h3>
              <div className="text-gray-400 text-xs uppercase mb-2 pr-24">{item.eng}</div>
              <p className="text-gray-700 text-sm font-medium mb-3">{item.degree}</p>
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1.5 rounded-full">{item.highlight}</span>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-card"></div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-6">
          排名来源：U.S. News Best Global Universities 2026, THE World University Rankings 2026, QS World University Rankings 2026, 软科ARWU 2025
        </p>
      </div>
    </section>
  );
}