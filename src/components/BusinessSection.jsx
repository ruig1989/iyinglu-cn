'use client';

const layers = [
  {
    icon: 'fas fa-graduation-cap',
    tag: '发展基石',
    title: '国内与国际贯通',
    desc: '志愿填报 · 出国留学 · 来华留学<br>多元规划，精准匹配，全球名校通道',
  },
  {
    icon: 'fas fa-chalkboard-user',
    tag: '价值引擎',
    title: '人才与企服协同',
    desc: '人才终身服务 · 企业组织赋能<br>从求学到就业，跨文化培训与人才引进',
  },
  {
    icon: 'fas fa-project-diagram',
    tag: '生态愿景',
    title: '平台与战略引领',
    desc: '区域战略聚焦 · 平台生态裂变<br>智库研究，国际峰会，嬴麓国际社区',
  },
];

const policies = [
  {
    icon: 'fas fa-globe',
    title: '支持留学',
    desc: '职业规划、院校匹配、文书创作、院校申请、签证办理、行前指南，助您安全入读全球知名院校。',
  },
  {
    icon: 'fas fa-home',
    title: '鼓励回国',
    desc: '分享央国企人才引进、地方海归政策，留学初始即嵌入回国发展路径，让海归人才有舞台、有通道。',
  },
  {
    icon: 'fas fa-plane',
    title: '来去自由',
    desc: '提供客观中立的海外就业与居留咨询，尊重个人选择，不强制、不误导，保障从容决策。',
  },
  {
    icon: 'fas fa-lightbulb',
    title: '发挥作用',
    desc: '倡导结合个人兴趣与十五五规划选择学习方向，学成后切实服务于国家现代化建设与全球竞争。',
  },
];

const stats = [
  { value: '77%', label: '高等教育阶段（本硕博）留学意向占比' },
  { value: '63%', label: '本科在读学生留学意向占比' },
  { value: '55%', label: '公立中小学普通班学生留学意向占比' },
  { value: '15%', label: '留学回国人员考公/考编比例' },
];

export default function BusinessSection() {
  return (
    <section id="business" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">战略增长三层模型</h2>
        <p className="section-sub">以升学规划为基石，赋能人才、企业与区域生态</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {layers.map((layer, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 md:p-8 shadow-sm border border-gray-border card-hover text-center">
              <div className="text-4xl text-secondary mb-5"><i className={layer.icon}></i></div>
              <div className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3">{layer.tag}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{layer.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: layer.desc }}></p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-light to-white rounded-card p-6 md:p-10 shadow-sm border border-gray-border mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
                <i className="fas fa-graduation-cap"></i> 发展基石 · 出国留学
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">留学筑梦，共赢未来</h2>
              <div className="bg-white border-l-4 border-secondary p-5 rounded-xl shadow-sm mb-5">
                <div className="text-primary font-semibold text-lg">“支持留学、鼓励回国、来去自由、发挥作用”</div>
                <div className="text-gray-500 text-xs mt-2">—— 新时代留学工作方针</div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                嬴麓国际立足齐鲁，深入践行新时代留学工作方针，助力有志学子进阶世界顶尖学府，完成从“成功出去”到“出去成功”再到“学成有为”的跃迁，成就国家需要与自我实现的双赢，同心共筑中华民族伟大复兴的中国梦。
              </p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                立即规划评估 <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-border flex justify-between items-center card-hover">
                  <div>
                    <div className="text-3xl font-extrabold text-secondary">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </div>
                  <i className="fas fa-chart-line text-3xl text-secondary/30"></i>
                </div>
              ))}
              <div className="col-span-full text-center text-gray-400 text-xs mt-1">数据来源：中国学生出国留学发展报告（2026）</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-title">深入践行新时代留学工作方针</h2>
          <p className="section-sub">从规划到归国，嬴麓国际将十六字方针贯穿每一个留学服务环节</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((policy, idx) => (
              <div key={idx} className="bg-white rounded-card p-6 shadow-sm border border-gray-border card-hover text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${policy.icon} text-2xl text-secondary`}></i>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{policy.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{policy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}