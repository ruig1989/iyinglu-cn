const fuCards = [
  { icon: 'fas fa-chess-rook', text: '泰山之阳，嬴地肇始。舜赐伯益，姓启嬴秦。文明之源，华夏之魄。' },
  { icon: 'fas fa-book-open', text: '汶水西流，麓基永固。千载文脉，山麓相依。厚德载物，攀登不息。' },
  { icon: 'fas fa-map-location-dot', text: '嬴麓国际，发轫于斯。承嬴之志，秉麓之实。扎根嬴地，麓达天下。' },
];

const timeline = [
  { year: '2007', desc: '创始人参加美国康涅狄格州第15学区旁布拉格高中教师在莱芜一中举办的讲座，激发了出国留学的梦想' },
  { year: '2009', desc: '创始人加入青岛大学国际交流协会，接待来华留学生，开始接触国际学生事务' },
  { year: '2010-2012', desc: '创始人DIY申请获得佛罗里达大学录取，并成功帮助同学获得香港大学、奥克兰大学等海外名校录取' },
  { year: '2012-2013', desc: '创始人获得佛罗里达大学硕士学位、沃灵顿商学院全球管理证书、维也纳经济管理大学国际管理证书，留学期间游学德国、阿根廷，参与全球休闲餐饮领军企业（纳斯达克上市）国际零售战略咨询项目' },
  { year: '2014-2024', desc: '创始人先后任职于国内头部留学机构（含纳斯达克上市公司）、知名教育科技集团以及A股上市科技公司，深耕国际教育与商务拓展' },
  { year: '2025.10', desc: '嬴麓国际正式成立' },
  { year: '2026.01', desc: '嬴麓国际受邀出席在舜耕山庄举办的“2026年国际教育项目高质量发展研讨会暨交流活动”，成为山东财经大学出国留学培训基地招生咨询合作伙伴' },
  { year: '2026.05', desc: '创始人获聘高途（NYSE:GOTU）升学规划研究院研究员' },
];

const features = [
  { icon: 'fas fa-school', title: '留学全链专家', desc: '宾大、密大、UCL等顶尖名校录取案例' },
  { icon: 'fas fa-chart-line', title: '国际商务洞察', desc: '中美上市公司实战经验，直击企业全球化痛点' },
  { icon: 'fas fa-lightbulb', title: '战略资源整合', desc: '从0到1的业务拓展与跨国合作操盘' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">嬴麓赋</h2>
        <p className="section-sub">探寻嬴麓二字的文明密码，感悟泰山汶水的精神力量</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {fuCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-card p-6 shadow-sm border border-gray-border card-hover text-center">
              <div className="text-4xl text-secondary mb-4"><i className={card.icon}></i></div>
              <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-border pt-12 mb-16">
          <h2 className="section-title">从初心到格局</h2>
          <p className="section-sub">每一步积淀，都为了更专业的服务</p>
          <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-secondary/30">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[41px] top-1 w-5 h-5 bg-secondary rounded-full border-4 border-white shadow-[0_0_0_2px_#b8924a]"></div>
                <div className="text-secondary font-bold text-base mb-1">{item.year}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-border pt-12">
          <h2 className="section-title">我们的复合基因</h2>
          <p className="section-sub">十八年积累，跨越留学、产业与战略</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-card p-6 shadow-sm border border-gray-border card-hover text-center">
                <div className="text-4xl text-secondary mb-3"><i className={feat.icon}></i></div>
                <h3 className="text-xl font-semibold text-primary mb-1">{feat.title}</h3>
                <p className="text-gray-500 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}