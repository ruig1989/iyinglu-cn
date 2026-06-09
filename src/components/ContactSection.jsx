'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus({ type: 'error', message: '请填写姓名和联系电话' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error(result.message || '提交失败');
      }
    } catch (error) {
      console.error('提交出错:', error);
      setStatus({ type: 'error', message: '提交失败，请直接电话联系我们' });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">开启您的全球人才战略</h2>
        <p className="section-sub">嬴麓国际期待与您同行</p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-5">
            <div className="flex items-start gap-3">
              <i className="fas fa-map-marker-alt text-secondary text-lg mt-1"></i>
              <div className="text-gray-600 text-sm">济南市莱芜高新区世纪城路1号<br />希尔顿欢朋酒店写字楼802</div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-phone-alt text-secondary text-lg"></i>
              <span className="text-gray-600 text-sm">+86 189-5318-1556</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-secondary text-lg"></i>
              <span className="text-gray-600 text-sm">info@iyinglu.cn</span>
            </div>
            <div className="flex items-start gap-3">
              <i className="fas fa-clock text-secondary text-lg mt-1"></i>
              <div className="text-gray-600 text-sm">周一至周五 10:00 - 16:00<br />周末节假日 仅限预约</div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fab fa-weixin text-secondary text-lg"></i>
              <span className="text-gray-600 text-sm">公众号：嬴麓国际</span>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="您的姓名" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-secondary outline-none transition text-sm" required />
              <input type="tel" name="phone" placeholder="联系电话" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-secondary outline-none transition text-sm" required />
              <input type="email" name="email" placeholder="电子邮箱" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-secondary outline-none transition text-sm" />
              <textarea name="message" rows="4" placeholder="留言内容" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-border focus:border-secondary outline-none transition text-sm resize-none"></textarea>
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                {loading ? '提交中...' : '提交'}
              </button>
            </form>
            {status.message && (
              <div className={`mt-4 text-center text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                {status.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}