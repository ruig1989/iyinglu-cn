export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: '首页', href: '#home' },
    { name: '业务体系', href: '#business' },
    { name: '成功案例', href: '#cases' },
    { name: '关于我们', href: '#about' },
    { name: '嬴麓洞察', href: '#insights' },
    { name: '联系我们', href: '#contact' },
  ];

  const relatedLinks = [
    { name: '欧美同学会', href: 'https://www.wrsa.net/', external: true },
    { name: '中国留学网', href: 'https://www.cscse.edu.cn/', external: true },
    { name: '国家留学网', href: 'https://www.csc.edu.cn/', external: true },
    { name: '留学中国网', href: 'https://www.studyinchina.edu.cn/', external: true },
    { name: '平安留学', href: 'https://palx.cscse.edu.cn/', external: true },
    { name: '青岛大学', href: 'https://www.qdu.edu.cn/', external: true },
    { name: '佛罗里达大学沃灵顿商学院', href: 'https://warrington.ufl.edu/', external: true },
    { name: '教育部教育涉外监管信息网', href: 'https://jsj.moe.gov.cn/', external: true },
  ];

  const handleClick = (e, href, external) => {
    if (!external && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-primary text-gray-300 pt-12 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="text-2xl font-bold text-white">
              嬴麓<span className="text-secondary">国际</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">快速链接</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href, false)}
                  className="text-sm text-gray-300 hover:text-secondary transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">相关链接</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {relatedLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-gray-300 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 text-center text-xs text-gray-400">
          © {currentYear} 济南嬴麓国际人才合作有限公司 保留所有权利
        </div>
      </div>
    </footer>
  );
}